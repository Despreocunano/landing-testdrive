import { Resend } from 'resend';
import type { FormData } from '../types/form';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  try {
    const { name, email, subject, message } = formData;
    
    await resend.emails.send({
      from: 'Formulario de Contacto <onboarding@resend.dev>',
      to: 'hola@dreamco.cl',
      reply_to: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: 'Error al enviar el email. Por favor, intenta nuevamente.' 
    };
  }
};