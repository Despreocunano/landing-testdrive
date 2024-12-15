import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { SubmitButton } from './SubmitButton';
import { Toast } from './Toast';
import type { FormData } from '../types/form';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setToast({
        type: 'success',
        message: '¡Mensaje enviado con éxito!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setToast({
        type: 'error',
        message: error instanceof Error ? error.message : 'Error al enviar el mensaje'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Asunto"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <FormTextArea
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </>
  );
};