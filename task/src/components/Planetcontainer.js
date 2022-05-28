import React from "react";

function Planet({ name, population }) {
  console.log(population);
  return (
    <div className="my-7 text-center text-white p-6 m-auto bg-cyan-900 border-2 rounded-md shadow-md border-top lg:max-w-md">
      <p className="text-xl mb-3">{name}</p>
      <p className="text-4xl">{population}</p>
    </div>
  );
}

export default Planet;
