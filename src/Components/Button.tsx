import React from "react";
import Icon from "./Icon";
interface ButtonProps {
  onClick: () => void;
  label?: string;
  className?: string; // Permite clases personalizadas
  iconName?: "add" | "edit" | "delete" | "save";
  iconProps?: string; // Optional icon prop
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  iconName,
  iconProps = "w-6 h-6 mr-2",
}) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {iconName && <Icon name={iconName} className={iconProps} />}
      {label}
    </button>
  );
};

export default Button;
