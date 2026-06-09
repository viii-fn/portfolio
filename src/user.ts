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
            startDate: new Date(2026, 5, 21),
            endDate: null,
            description: 'full stack software developer at 5Point1Nexus alongside the team building NexusPod',
            social: [
              {
                title: 'website',
                url: 'https://www.5point1nexus.com/'
              },
              
              {
                title: 'instagram',
                url: 'https://instagram.com/5point1nexus'
              },
              
              {
                title: 'x',
                url: 'https://x.com/5point1nexus'
              },

              {
                title: 'youtube',
                url: 'https://youtube.com/@5point1nexus'
              },

              {
                title: 'linkedin',
                url: 'https://linkedin.com/company/5point1nexus'
              },

              {
                title: 'facebook',
                url: 'https://facebook.com/5point1nexus'
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
            startDate: new Date(2026, 4, 23),
            endDate: null,
            description: 'part time videographer and assitant photographer at Charles Pictures',
            social: [
              {
                title: 'instagram',
                url: 'https://instagram.com'
              }
            ]
          }
        ]
      }
    ],
    projects: [
      {
        url: 'https://neon-compressor.pxxl.click',
        title: 'Neon Compressor',
        description: 'A light weight image compressor with client side blob metrics. Built with react and tailwindcss, uses the browser native canvas api to compress images without the need for a backend server'
      },

      {
        url: 'https://github.com/viii-fn/Fn_Control_Pannel',
        title: 'Fn_Control_Pannel',
        description: 'A simple batch file tool for automating repetitive tasks as well as getting vital system info from windows'
      },

      {
        url: 'https://dedsecvi.vercel.app/',
        title: 'DedsecVI',
        description: 'An early project of mine, a tribute to the watch dogs franchise built with html and plain css.contains a roadmap and data for ethical hacking and cybersecurity as well as a collection of resources for learning the craft'
      }
    ],
    social: [
      {
        title: 'github',
        url: 'https://github.com/viii-fn'
      },

      {
        title: 'x',
        url: 'https://x.com/viii_fn'
      },

      {
        title: 'instagram',
        url: 'https://instagram.com/viii_fn'
      },

      {
        title: 'tiktok',
        url: 'https://tiktok.com/viii_fn'
      },
      
      {
        title: 'whatsapp',
        url: 'https://wa.me/+2348160575048'
      }
    ]
  } 
]