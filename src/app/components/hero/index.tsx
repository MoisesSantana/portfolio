import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export function Hero() {
  return (
    <div
      id="quem-sou"
      className="container flex flex-wrap justify-between mx-auto mt-20 text-white"
    >
      <div className="max-[1279px]:w-full mx-2">
        <h1 className={`${ubuntu.className} text-7xl drop-shadow-md`}>
          Moisés Santana
        </h1>
        <h1 className="text-3xl text-lime-500">Software Developer</h1>
        <p className="max-w-3xl max-[1279px]:max-w-full mt-8 text-justify text-gray-700">
          Sou uma pessoa altamente adaptável e colaborativa, com uma enorme
          paixão por construir aplicações e oferecer resultados de alta
          qualidade, independentemente da tecnologia utilizada.
          <br />
          <br />
          Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na
          Descomplica Faculdade Digital e possuo uma sólida experiência de mais
          de dois anos como dev. Minha experiência se destaca especialmente no
          desenvolvimento web front-end, além de acompanhar e monitorar
          resultados e minha habilidade como docente.
          <br />
          <br />
          Estou sempre muito entusiasmado com as atualizações do universo da
          programação, mantenho-me sempre atualizado, dedicando-me a estudos e
          aprimoramentos contínuos.
        </p>
        <button className="px-4 py-2 mt-8 rounded-md bg-lime-400 hover:bg-lime-500">
          Download CV
        </button>
      </div>
      <div className="flex justify-center items-center max-[1279px]:hidden">
        <div className="overflow-hidden border-4 rounded-full border-lime-500">
          <Image src="/me.png" alt="Moisés Santana" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
