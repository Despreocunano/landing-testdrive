import type { APIRoute } from 'astro';
import { z } from 'zod';
import { sendEmail } from '../../utils/email';

const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(1, 'El asunto es requerido'),
  message: z.string().min(1, 'El mensaje es requerido')
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const validatedData = contactSchema.parse(data);
    
    const result = await sendEmail(validatedData);
    
    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }), 
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Email enviado exitosamente' }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: error.errors[0].message }), 
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};