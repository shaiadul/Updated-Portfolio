import React from "react";
import evolve from "../assets/portfolio/evolve.png";
import alpho from "../assets/portfolio/alpho.png";
import schoolmap from "../assets/portfolio/schoolmap.png";
import teamprojec from "../assets/portfolio/teamprojec.png";
import translate from "../assets/portfolio/translate.png";
import walton from "../assets/portfolio/walton.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: teamprojec,
      link: 'https://neighbour-home.web.app/',
      repo: 'https://github.com/khanshorif331/neighbour-home'
    },
    {
      id: 2,
      src: schoolmap,
      link: 'https://schoolmap-7f024.web.app/',
      repo: 'https://github.com/shaiadul/SchoolMap'
    },
    {
      id: 3,
      src: walton,
      link: 'https://walton-pc.web.app/',
      repo: 'https://github.com/shaiadul/waltonPc-client'
    },
    {
      id: 4,
      src: evolve,
      link: 'https://assignment-ten-2cf19.web.app/',
      repo: 'https://github.com/shaiadul/envolve-client'
    },
    {
      id: 5,
      src: translate,
      link: 'https://translate-saidul-404.netlify.app/',
      repo: 'https://github.com/shaiadul/Saidul_Translate'
    },
    {
      id: 6,
      src: alpho,
      link: 'https://assignment-three96.netlify.app/#home',
      repo: 'https://github.com/Porgramming-Hero-web-course/convention-center-shaiadul/tree/main'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-double border-b-4 border-purple-500">
            Portfolio
          </p>
          <p className="py-6 text-purple-400">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* project picture include success*/}
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 w-full h-56"
              />
              <div className="flex items-center justify-center bg-gradient-to-r from-cyan-900 to-purple-900">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold font-serif" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold font-serif" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button> {/* project link */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// default issues
export default Portfolio;
