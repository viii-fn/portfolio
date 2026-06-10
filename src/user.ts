import { type userProp } from "./dto/props.dto";

export const elvis: userProp[] = [
  {
    firstName: 'elvis',
    lastName: 'irhaye',
    roles: [
      {
        title: 'software engineer',
        career: 'software engineering',
        years: 4,
        skills: ['c#', 'javscript', 'typescript'],
        job: [
          {
            title: 'full stack developer',
            company: '5Point1Nexus',
            startDate: new Date(2026, 4, 21),
            endDate: null,
            description: 'Full stack software developer at 5Point1Nexus alongside the team building NexusPod',
            social: [
              {
                title: 'website',
                url: 'https://www.5point1nexus.com/'
              },
              
              {
                title: 'instagram',
                url: 'https://instagram.com/5point1nexus/'
              },
              
              {
                title: 'x',
                url: 'https://x.com/5point1nexus/'
              },

              {
                title: 'youtube',
                url: 'https://youtube.com/@5point1nexus/'
              },

              {
                title: 'linkedin',
                url: 'https://linkedin.com/company/5point1nexus/'
              },

              {
                title: 'facebook',
                url: 'https://facebook.com/5point1nexus/'
              }
            ]
          },

          {
            title: 'coding tutor',
            company: 'dochuma academy',
            startDate: new Date(2025, 10, 9),
            endDate: new Date(2025, 11, 5),
            description: 'Coding and web-development tutor at dochuma academy, an educational organization responsible for deploying speed and abbacus maths teachers and as well as coding tutors and teachers to various institutions',
            social: [
              {
                title: 'website',
                url: 'https://dochuma-academy.vercel.app/'
              },

              {
                title: 'facebook',
                url: 'https://www.facebook.com/dochuma-academy/'
              },

              {
                title: 'youtube',
                url: 'https://m.youtube.com/@Crystal_EducationMedia/'
              }
            ]
          }
        ]
      },

      {
        title: 'cinematographer',
        career: 'cinematography',
        years: 6,
        skills: ['photoshop', 'VSDC editor', 'premier rush'],
        job: [
          {
            title: 'videographer',
            company: 'Charles Pictures',
            startDate: new Date(2026, 3, 23),
            endDate: null,
            description: 'Part time videographer and assitant photographer at Charles Pictures',
            social: [
              {
                title: 'instagram',
                url: 'https://instagram.com/'
              }
            ]
          }
        ]
      }
    ],
    projects: [
      {
        url: 'https://neon-compressor.pxxl.click/',
        title: 'Neon Compressor',
        description: 'A light weight image compressor with client side blob metrics. Built with react and tailwindcss, uses the browser native canvas api to compress images without the need for a backend server.'
      },

      {
        url: 'https://github.com/viii-fn/Fn_Control_Pannel/',
        title: 'Fn_Control_Pannel',
        description: 'A simple batch file tool for automating repetitive tasks as well as getting vital system info from windows.'
      },

      {
        url: 'https://www.aaronoteze.com/',
        title: 'Aaron Oteze',
        description: 'An interactive portfolio website, web-gallery and blog page for a well known technical writer, blogger, and artist.'
      },

      {
        url: 'https://dedsecvi.vercel.app/',
        title: 'DedsecVI',
        description: 'An early project of mine, a tribute to the watch dogs franchise built with html and plain css. Contains a roadmap and data for ethical hacking and cybersecurity as well as a collection of resources for learning the craft.'
      },

      {
        url: 'https://dochuma-academy.vercel.app/',
        title: 'Dochuma Academy',
        description: 'A mini portfolio page for an educational start up organization, "Dochuma Academy".'
      },

      {
        url: 'https://house27homes.vercel.app/',
        title: 'House 27',
        description: '(Still in development) An interactive mock up preview for House 27 Homes, A real estate organization based in Nigeria.'
      }
    ],
    social: [
      {
        title: 'github',
        url: 'https://github.com/viii-fn/'
      },

      {
        title: 'x',
        url: 'https://x.com/viii_fn/'
      },

      {
        title: 'instagram',
        url: 'https://instagram.com/viii_fn/'
      },

      {
        title: 'tiktok',
        url: 'https://tiktok.com/viii_fn/'
      }
    ]
  } 
]