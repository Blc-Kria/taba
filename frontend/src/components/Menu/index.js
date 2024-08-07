import Link from 'next/link';
import Taba from '../Taba/Taba';

const Menu = () => {
  return (
    <nav className="px-20 flex justify-center max-w-full max-h-26 pt-16">
      <Taba />
      <ul className="flex w-full items-center text-xl text-cyan-50 pl-16">
        <li className="flex-1 text-center border-b-2 px-4 py-2 border-transparent hover:border-cyan-50">
          <Link href="./">Início</Link>
        </li>
        <li className="flex-1 text-center border-b-2 px-4 py-2 border-transparent hover:border-cyan-50">
          <Link href="/about">Sobre Nós</Link>
        </li>
        <li className="flex-1 text-center border-b-2 px-4 py-2 border-transparent hover:border-cyan-50">
          <Link href="/projects">Projetos</Link>
        </li>
        <li className="flex-1 text-center border-b-2 px-4 py-2 border-transparent hover:border-cyan-50">
          <Link href="/register">Enviar Projetos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
