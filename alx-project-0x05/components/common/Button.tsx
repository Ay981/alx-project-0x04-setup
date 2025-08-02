import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  return (
    <button
      className={`bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-semibold py-2 px-6 rounded-full text-md transition duration-300 shadow-lg transform hover:scale-105`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
