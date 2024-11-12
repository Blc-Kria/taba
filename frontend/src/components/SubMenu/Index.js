import Link from "next/link";
import React from "react";

const SubMenu = () => {
  return (
    <div className="pt-32 px-20 max-w-2xl md:pl-8 md:pr-20 pl-[2rem] pr-[5rem] text-cyan-50">
      <p className="text-4xl">Transforme ideias em</p>
      <p className="text-6xl pb-4">Impacto real com Blockchain</p>
      <p className="text-xl">
        Sua oportunidade de investir com total transparência e segurança.
      </p>
      <br />
      <button
        className="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded-full w-32">
        <Link href="/about">Sobre Nós</Link></button>
    </div>
  );
};

export default SubMenu;
