import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full px-6 py-3 bg-accent text-white font-medium rounded-md
              hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200 ease-in-out"
  >
    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
  </button>
);