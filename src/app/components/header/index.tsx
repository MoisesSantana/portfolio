'use client';
import Link from 'next/link';
import { LinkedinLogo, WhatsappLogo, GithubLogo, List } from 'phosphor-react';
import { useState } from 'react';

export function Header() {
  const { innerWidth } = window;
  const [openMenu, setOpenMenu] = useState(innerWidth < 1024);

  return (
    <header className="text-gray-700 bg-white shadow ">
      <div className="container py-5 mx-auto lg:flex lg:items-center lg:justify-between">
        <nav className="flex gap-4">
          <Link
            href="https://linkedin.com/in/moises-santana"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 ease-in-out hover:text-lime-500"
          >
            <LinkedinLogo size={40} />
          </Link>
          <Link
            href="https://github.com/moisessantana"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 ease-in-out hover:text-lime-500"
          >
            <GithubLogo size={40} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5521990837905"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center duration-300 ease-in-out hover:text-lime-500"
          >
            <WhatsappLogo size={40} />
            <span>(21)99083-7905</span>
          </Link>
          <button
            className="flex items-center justify-end flex-1 mx-2 cursor-pointer lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <List size={40} />
          </button>
        </nav>
        <nav
          className={`${
            openMenu && 'top-[80px] opacity-100 z-20'
          } lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}
        >
          <Link
            href="#quem-sou"
            className="block mx-4 my-6 text-xl duration-500 lg:my-0 hover:text-lime-500 whitespace-nowrap"
          >
            Quem sou
          </Link>
          <Link
            href="#o-que-faco"
            className="block mx-4 my-6 text-xl duration-500 lg:my-0 hover:text-lime-500 whitespace-nowrap"
          >
            O que faço
          </Link>
          <Link
            href="#projetos"
            className="block mx-4 my-6 text-xl duration-500 lg:my-0 hover:text-lime-500 whitespace-nowrap"
          >
            Projetos
          </Link>
          <Link
            href="#fale-comigo"
            className="block my-6 ml-4 text-xl duration-500 lg:my-0 hover:text-lime-500 whitespace-nowrap"
          >
            Fale comigo
          </Link>
        </nav>
      </div>
    </header>
  );
}
