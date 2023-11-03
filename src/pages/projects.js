import React from 'react';


import bank from '../assets/bank.png'
import polus from '../assets/polus.png'
import chef from '../assets/chef.png'

import wow from '../assets/wow.png'
import ryi from '../assets/ryi.png'
import entsorgmeister from '../assets/entsorgmeister.png'
import psglobaltv from '../assets/psglobaltv.png'

export default function Projects() {
  return (
    <div className=" bg-slate-50 relative overflow-hidden" id="projects">
      <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
        <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
          Freelance Projects
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {projects.map((proj) => {
            return (
              <div className="p-4 shadow-md space-y-4 bg-white">
                <div className="h-32 overflow-hidden border-b relative">
                  <img alt="" src={proj.img} className="w-full absolute left-0 my-auto "></img>
                </div>
                <div className="text-2xl text-cyan-500">{proj.title}</div>
                <div className="h-20 overflow-y-auto text-gray-400 font-light text-xs">
                  {proj.details}
                </div>
                <div className="flex justify-end space-x-4 items-center opacity-40">
                  {proj.links.map((link) => {
                    return (
                      <a
                        href={link.link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="h-5 cursor-pointer text-2xl text-gray-500 flex items-center"
                      >
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Entsorg-Meister",
    details: "Our website provides an anonymous platform for IIT and NIT students to review their institutes, ensuring privacy and improving the education experience.",
    img: entsorgmeister,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: "https://entsorg-meister.de/"
      },
    
    ]
  },
  {
    title: "World Of Women",
    details: "Our website provides an anonymous platform for IIT and NIT students to review their institutes, ensuring privacy and improving the education experience.",
    img: wow,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: "https://www.worldofwomen.art/"
      },
      // {
      //   icon: <i class="devicon-github-original"></i>,
      //   link: "https://rateyourinstitute.com/",
      // },
    ]
  },
  {
    title: "PS Global TV",
    details: "Our website provides an anonymous platform for IIT and NIT students to review their institutes, ensuring privacy and improving the education experience.",
    img: psglobaltv,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: "https://iptv-final.netlify.app/"
      },
      // {
      //   icon: <i class="devicon-github-original"></i>,
      //   link: "https://rateyourinstitute.com/",
      // },
    ]
  },
  {
    title: "RateYourInstitute",
    details: "Our website provides an anonymous platform for IIT and NIT students to review their institutes, ensuring privacy and improving the education experience.",
    img: ryi,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: "https://rateyourinstitute.vercel.app/"
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: "https://rateyourinstitute.vercel.app/",
      },
    ]
  },
  // {
  //   title: "RateYourInstitute",
  //   details: "Our website provides an anonymous platform for IIT and NIT students to review their institutes, ensuring privacy and improving the education experience.",
  //   img: RMI,
  //   links: [
  //     {
  //       icon: (
  //         <img
  //           alt=""
  //           src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
  //           className="h-full"
  //         ></img>
  //       ),
  //       link: "https://rateyourinstitute.com/"
  //     },
  //     {
  //       icon: <i class="devicon-github-original"></i>,
  //       link: "https://rateyourinstitute.com/",
  //     },
  //   ]
  // },
 
  {
    title: 'Polus Technology',
    details:
      'We have build a website for Polus Technology, a company dedicated to empowering growing businesses and brands.',
    img: polus,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://polustechnologies.com/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/Saksham8006/Polus_Tech',
      },
    ],
  },
  {
    title: 'Chef-Portfolio',
    img: chef,
    details: "We have crafting a portfolio for a talented chef, showcasing their culinary expertise and creativity in the kitchen ",
 
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://chef-satishportfolio.netlify.app/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/Saksham8006/Saksham8006-Chef_Portfolio',
      },
    ],
  },
  {
    title: 'Bank-App',
    details: 'We are developing a static website for Hoobank, a newly established financial institution.',
    img: bank,
    links: [
      {
        icon: (
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
            className="h-full"
          ></img>
        ),
        link: 'https://newhoobank.netlify.app/',
      },
      {
        icon: <i class="devicon-github-original"></i>,
        link: 'https://github.com/Saksham8006/bank_app',
      },
    ],
  },
  // {
  //   title: 'Bank-App',
  //   details: 'We are developing a static website for Hoobank, a newly established financial institution.',
  //   img: bank,
  //   links: [
  //     {
  //       icon: (
  //         <img
  //           alt=""
  //           src="https://img.icons8.com/ios-filled/50/000000/link--v1.png"
  //           className="h-full"
  //         ></img>
  //       ),
  //       link: 'https://newhoobank.netlify.app/',
  //     },
  //     {
  //       icon: <i class="devicon-github-original"></i>,
  //       link: 'https://github.com/Saksham8006/bank_app',
  //     },
  //   ],
  // },
];
