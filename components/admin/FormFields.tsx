'use client';

import { useState } from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export function FormSection({ title, description, defaultOpen = false, children }: FormSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden mb-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-900/50 hover:bg-gray-900 transition-colors text-left"
      >
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          {description && <p className="text-sm text-gray-500 mt-0.5">{description}</p>}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-5 border-t border-gray-800 bg-gray-900/30">
          {children}
        </div>
      )}
    </div>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
}

export function InputField({ label, name, type = 'text', defaultValue, placeholder, required, helpText }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  helpText?: string;
}

export function TextAreaField({ label, name, defaultValue, placeholder, required, rows = 4, helpText }: TextAreaFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
      />
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  required?: boolean;
}

export function SelectField({ label, name, options, defaultValue, required }: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

interface FileUploadProps {
  label: string;
  name: string;
  accept?: string;
  helpText?: string;
  currentImage?: string | null;
}

export function FileUpload({ label, name, accept = 'image/*', helpText, currentImage }: FileUploadProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
      </label>
      {currentImage && (
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">Current:</p>
          <img src={currentImage} alt={label} className="h-20 rounded-lg border border-gray-700" />
        </div>
      )}
      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-gray-700 file:text-white file:text-sm file:cursor-pointer hover:file:bg-gray-600"
      />
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}

interface MultiFileUploadProps {
  label: string;
  name: string;
  accept?: string;
  helpText?: string;
  currentImages?: string[];
  onRemoveImage?: (index: number) => void;
}

export function MultiFileUpload({ label, name, accept = 'image/*', helpText, currentImages, onRemoveImage }: MultiFileUploadProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
      </label>
      {currentImages && currentImages.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-2">Current images ({currentImages.length}):</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {currentImages.map((img, i) => (
              <div key={i} className="relative group">
                <img src={img} alt={`Image ${i + 1}`} className="h-20 w-full object-cover rounded-lg border border-gray-700" />
                {onRemoveImage && (
                  <button
                    type="button"
                    onClick={() => onRemoveImage(i)}
                    className="absolute top-1 right-1 bg-red-600/80 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        multiple
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-gray-700 file:text-white file:text-sm file:cursor-pointer hover:file:bg-gray-600"
      />
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
    </div>
  );
}
