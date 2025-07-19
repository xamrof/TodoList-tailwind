import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Permite clases personalizadas
  icon?: React.ReactNode; // Optional icon prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 flex items-center justify-center text-center bg-amber-950 text-white rounded-full hover:bg-amber-900 task-text ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
