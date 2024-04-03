import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function Button({ children, ...props }: IButton) {
  return (
    <button
      {...props}
      className="bg-primary px-4 py-2 text-white text-sm rounded-md"
    >
      {children}
    </button>
  );
}
