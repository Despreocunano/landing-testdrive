import React from 'react';
import type { InputProps } from '../types/form';

export const FormInput: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-accent-light text-sm font-medium">
      {label}:
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 bg-white/10 border border-accent-light/25 rounded-md
                text-white focus:border-accent-light focus:ring-1 focus:ring-accent-light
                focus:outline-none transition-colors"
    />
  </div>
);