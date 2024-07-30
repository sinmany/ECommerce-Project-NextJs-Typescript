import React from "react";
import style from "./style.module.css";

type Props = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ title, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`${style.container}  ${className}`}>
      {title}
    </button>
  );
}
