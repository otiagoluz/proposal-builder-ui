import React from "react";

// Lista de classes de cores do Tailwind para fundos
const baseColors = ["primary", "success", "secondary"];

// Função para gerar classes de Tailwind dinamicamente
const getTailwindColor = (key: string) => {
  const index = Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0) % baseColors.length;
  const base = baseColors[index];
  return {
    bgColor: `bg-${base}-50`, 
    textColor: `text-${base}-500`, 
  };
};

// Função para gerar iniciais do nome
const getInitials = (name: string) => {
  const words = name.split(" ");
  return words.map((word) => word[0]).slice(0, 2).join("").toUpperCase();
};

// Propriedades do componente
interface AvatarCardProps {
  id: string;
  name: string;
  description?: string;
}

const Avatar: React.FC<AvatarCardProps> = ({ id, name, description }) => {
  const { bgColor, textColor } = getTailwindColor(id); 
  const initials = getInitials(name); 

  return (
    <div
      tabIndex={-1}
      className="inline-flex items-center justify-center gap-2 rounded-small outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
    >
      {/* Avatar */}
      <span
        tabIndex={-1}
        className={`flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 w-10 h-10 text-tiny rounded-large  ${bgColor} ${textColor}`}
        // className={`flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 w-10 h-10 text-tiny text-primary-700 bg-primary-50 rounded-large  `}
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {initials}
      </span>

      <div className="inline-flex flex-col items-start">
        <span className="text-small text-inherit">{name}</span>
        {/* {description && <span className="text-tiny text-foreground-400">{description}</span>} */}
      </div>
    </div>
  );
};

export default Avatar;
