import React from 'react';
import type { TextAreaProps } from '../types/form';

export const FormTextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  required
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-accent-light text-sm font-medium">
      {label}:
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      className="w-full px-4 py-2 bg-white/10 border border-accent-light/25 rounded-md
                text-black focus:border-accent-light focus:ring-1 focus:ring-accent-light
                focus:outline-none transition-colors resize-y"
    />
  </div>
);