import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StyledInputProps {
  placeholder: string;
  type?: string;
  icon?: LucideIcon;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const StyledInput: React.FC<StyledInputProps> = ({ 
  placeholder, 
  type = 'text', 
  icon: Icon, 
  value, 
  onChange,
  required = false
}) => (
  <div className="relative w-full mb-4">
    {Icon && (
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Icon className="w-5 h-5" />
      </span>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full py-3 ${Icon ? 'px-12' : 'px-4'} rounded-xl border border-gray-300 font-nunito focus:outline-none focus:ring-2 focus:ring-vf-pink`}
    />
  </div>
);

