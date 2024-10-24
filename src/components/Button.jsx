import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="py-4 px-8 mx-auto rounded-md border-2 border-blue-400 border-solid bg-slate-950 duration-200 blueShadow"
    >
      <p>{text}</p>
    </button>
  );
}
