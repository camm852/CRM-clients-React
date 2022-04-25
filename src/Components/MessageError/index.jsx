import React from "react";

export default function MessageError({ children }) {
  return (
    <div className="my-2 text-left text-sm  text-red-600  font-bold  uppercase">
      {children}
    </div>
  );
}
