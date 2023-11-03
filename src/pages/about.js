import React from 'react';
import profile from '../assets/profile.jpeg'


export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={profile} className="rounded-full h-52 w-52 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Saksham Sharma</div>
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder</div>
          <div className="font-light text-gray-400">
          As a full-stack developer, I bring a unique blend of technical expertise and creative problem-solving to every project 
          I take on. I thrive on challenge and continuously seek out new opportunities to grow and improve. With a passion for learning
           and sharing knowledge, I am always on the lookout for ways to push the limits of my abilities and inspire others to do the
            same. With a versatile skill set and a willingness to adapt to new technologies, I am confident in my ability to tackle
             complex problems and deliver high-quality solutions. Whether working independently or collaborating with a team, I am
              dedicated to delivering exceptional results.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1ihr2UwLB9alqpuU81C1Z6XyLDV5LaMjS/view?usp=drive_link'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/dev-saksham/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/Saksham8006',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/_s.a.k.s.h.a.m___/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: '',
  },
];
