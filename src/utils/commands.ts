import { Command, TerminalLine } from "../types/terminal";

// Personal information
const personalInfo = {
  name: "Rishabh Singh",
  title: "Software Engineer",
  location: "Mumbai, India",
  company: "Inka",
  email: "ris8645208@gmail.com",
  website: "https://geeekgod.in",
  github: "https://github.com/geeekgod",
  linkedin: "https://linkedin.com/in/geeekgod",
  medium: "https://medium.com/@geeekgod",
};

const helpCommand: Command = {
  name: "help",
  description: "Show available commands",
  execute: () => [
    { type: "output", content: "Available commands:\n" },
    { type: "output", content: "  help          - Show this help message" },
    { type: "output", content: "  about         - Learn more about me" },
    { type: "output", content: "  contact       - Get my contact information" },
    {
      type: "output",
      content: "  projects      - View my projects and repositories",
    },
    { type: "output", content: "  blogs         - Read my latest blog posts" },
    { type: "output", content: "  skills        - View my technical skills" },
    { type: "output", content: "  experience    - See my work experience" },
    {
      type: "output",
      content: "  social        - Links to my social profiles",
    },
    { type: "output", content: "  resume        - Download my resume" },
    { type: "output", content: "  themes        - View available themes" },
    { type: "output", content: "  theme [name]  - Change terminal theme" },
    { type: "output", content: "  clear         - Clear the terminal" },
    { type: "output", content: "  history       - Show command history" },
    { type: "output", content: "  echo [text]   - Echo back the text" },
    { type: "output", content: "\nNavigation:" },
    { type: "output", content: "  ↑/↓ arrows   - Navigate command history" },
    { type: "output", content: "  Tab           - Autocomplete commands" },
    { type: "output", content: "  Ctrl+L        - Clear terminal" },
  ],
};

const aboutCommand: Command = {
  name: "about",
  description: "Learn more about me",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                        ABOUT ME                             │
    ╰─────────────────────────────────────────────────────────────╯
    
    Name:        ${personalInfo.name}
    Title:       ${personalInfo.title}
    Location:    ${personalInfo.location}
    Company:     ${personalInfo.company}
    
    ╭─────────────────────────────────────────────────────────────╮
    │                       BACKGROUND                            │
    ╰─────────────────────────────────────────────────────────────╯
    
    I started programming when I was just 14, tinkering with basic
    languages and creating simple games for fun. That initial spark 
    grew into a full-blown passion that drives me today.
    
    Currently working as a SDE 2 at Inka, I thrive on crafting 
    digital experiences, whether it's apps, websites, or systems - 
    anything that runs on a computer. With four years of experience 
    under my belt, I make sure everything I work on is polished to 
    perfection.

    I'm currently focused on building Conversational AI Agents, and
    integrating AI into existing products to enhance user experience.
    `,
    },
  ],
};

const contactCommand: Command = {
  name: "contact",
  description: "Get my contact information",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                      CONTACT INFO                           │
    ╰─────────────────────────────────────────────────────────────╯
    
    Email:       ${personalInfo.email}
    Website:     ${personalInfo.website}
    Location:    ${personalInfo.location}
    
    ╭─────────────────────────────────────────────────────────────╮
    │                    REACH OUT TO ME                          │
    ╰─────────────────────────────────────────────────────────────╯
    
    📧 Email me at: ${personalInfo.email}
    🌐 Visit my website: ${personalInfo.website}
    💼 LinkedIn: ${personalInfo.linkedin}
    🐙 GitHub: ${personalInfo.github}
    📝 Medium: ${personalInfo.medium}
    
    Got an idea to work on or just want to say hello? 
    I'd love to hear from you!
    `,
    },
  ],
};

const skillsCommand: Command = {
  name: "skills",
  description: "View my technical skills",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                   TECHNICAL SKILLS                          │
    ╰─────────────────────────────────────────────────────────────╯
    
    Frontend:
    ├── React.js & Next.js
    ├── TypeScript & JavaScript
    ├── Tailwind CSS & CSS3
    ├── HTML5 & Responsive Design
    └── Framer Motion & Animations
    
    Backend:
    ├── Node.js & Express.js
    ├── Python & FastAPI
    ├── REST APIs & GraphQL
    └── Microservices Architecture
    
    Database:
    ├── MongoDB & PostgreSQL
    ├── Redis & Caching
    └── Database Design
    
    DevOps & Tools:
    ├── Docker & Kubernetes
    ├── AWS & Cloud Services
    ├── Git & GitHub
    ├── CI/CD Pipelines
    └── Linux & Terminal
    
    Other:
    ├── System Design
    ├── Performance Optimization
    ├── Testing (Jest, Cypress)
    └── Agile Development
    `,
    },
  ],
};

const projectsCommand: Command = {
  name: "projects",
  description: "View my projects and repositories",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                       MY PROJECTS                           │
    ╰─────────────────────────────────────────────────────────────╯

    🤖 Vaani
    ├── Led the development of the new feature/product in favor of IIR (Inka Insurance Report) Dashboard.
    ├── A Conversational AI Agent which helps user's navigate, understand and get a better understanding of the report dashboard.
    ├── Tech: Python, Docker, LLMs, and a lot lot more of AI stuff.
    ├── Role: Lead Developer
    └── Built at: Inka Insurance

    📞 OutCallerAI
    ├── Built the entire product from scratch.
    ├── An AI-powered outbound caller that engages customers in human-like conversations and helps businesses automate their outreach efforts.
    ├── Tech: React, NextJS, Python (FastAPI), Docker, LLMs, PostgreSQL, Redis, Twilio, Plivo and a lot lot more of AI stuff.
    ├── Role: Lead Developer, Manager, Product Owner
    └── Built at: SSingularity Technologies (2025)

    💼 OutRiskAI
    ├── Built the entire product from scratch.
    ├── It provides comprehensive risk analysis, summarization, and access to expert legal assistance.
    ├── Tech: React, NextJS, Python (FastAPI), Docker, LLMs, PostgreSQL, Redis and a lot of AI stuff
    ├── Role: Lead Developer, Manager, Product Owner
    └── Built at: SSingularity Technologies (2024-2025)
    
    📚 Hiranandani Foundation School App
    ├── Mobile App that allows parents easily access all the course work,
    ├── events, attendance records, fees information and many more at their finger tips.
    ├── Tech: React, React Native
    ├── Scale: Has around 2k+ monthly active users (2024-2025)
    ├── Role: Lead Developer, Manager, Product Owner
    └── Built at: SSingularity Technologies

    💼 Tata Embrace Lite
    ├── A micro LMS integrated with existing LMS of Entire Tata Group HR
    ├── Integration had to be done on a legacy unmaintained system which was a challenge.
    ├── Tech: React, Asp.Net, Azure, Azure DevOps
    ├── Scale: Used by the entire Tata Group (100,000+ users)
    ├── Role: Lead Developer, Manager, Product Owner
    └── Built at: SSingularity Technologies (2023-2025)
    
    💲 Deloitte x Quodeck integration middleware
    ├── A middleware application which allows Quodeck's learning platform to integrate with Deloitte's LMS
    ├── Tech: Asp.Net Core, MS-SQL, Azure, Microservices
    ├── Scale: Deloitte's LMS had a humongous data warehouse which included
    ├── millions of records, which were handled seamlessly by the middleware.
    ├── Role: Lead Developer, Manager, Product Owner
    └── Built at: SSingularity Technologies (2022-2025)

    
    Visit my GitHub: ${personalInfo.github}
    `,
    },
  ],
};

const experienceCommand: Command = {
  name: "experience",
  description: "See my work experience",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                   WORK EXPERIENCE                           │
    ╰─────────────────────────────────────────────────────────────╯
    
    🏢 Software Engineer II (SDE 2) - Inka
    ├── Duration: Feb 2025 - Present
    ├── Location: Thane, India (Remote)
    ├── Focus: Insurance empowered by AI & Data
    ├── Responsibilities:
    │   ├── Full-stack development
    │   ├── System architecture and design
    │   ├── Performance optimization and scaling
    │   ├── Assist junior developers
    │   ├── Driving healthy technical culture
    │   └── Code review and quality assurance
    └── Technologies: Javascript, Python, Docker, LLMs, AWS, GCP and many more cool stuff.

    🏢 Founding Engineer - SSingularity Technologies
    ├── Duration: Jan 2024 - Feb 2025
    ├── Location: Thane, India (WFO)
    ├── Focus: Empowering businesses with cutting-edge AI solutions
    ├── Responsibilities:
    │   ├── All round Engineering (Web, Mobile, Backend, DevOps)
    │   ├── System architecture and design
    │   ├── Performance optimization and scaling
    │   ├── Leading the entire engineering team
    │   ├── Driving healthy technical culture
    │   └── Code review and quality assurance
    └── Technologies: Javascript, Python, Ruby, C#, PHP, Docker, LLMs, AWS, Azure, Digital Ocean and many more cool stuff.

    🏢 Tech Intern - SSingularity Technologies
    ├── Duration: May 2021 - Jan 2024
    ├── Location: Thane, India (Hybrid)
    ├── Focus: Building scalable applications and services
    ├── Responsibilities:
    │   ├── Started from scratch as an intern and quickly rose to become a key team member
    │   ├── From Frontend to Backend to DevOps, handled it all
    │   ├── System architecture and design
    │   ├── Performance optimization and scaling
    │   ├── Leading the entire engineering team
    │   ├── Driving healthy technical culture
    │   └── Code review and quality assurance
    └── Technologies: Javascript, Python, Ruby, C#, PHP, Docker, LLMs, AWS, Azure, Digital Ocean and many more cool stuff.
    
    💻 4+ Years of Programming Experience
    ├── Started coding at age 14
    ├── Progression: Games → Web Development → Enterprise Software
    ├── Continuous learning and skill development
    └── Passion for creating polished, high-quality software
    
    🎯 Key Achievements:
    ├── Built scalable applications serving hundred thousands of users
    ├── Optimized system performance and reduced load times
    ├── Implemented best practices for code quality
    └── Contributed to team growth and knowledge sharing
    `,
    },
  ],
};

const socialCommand: Command = {
  name: "social",
  description: "Links to my social profiles",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                     SOCIAL LINKS                            │
    ╰─────────────────────────────────────────────────────────────╯
    
    🐙 GitHub:     ${personalInfo.github}
    💼 LinkedIn:   ${personalInfo.linkedin}
    📝 Medium:     ${personalInfo.medium}
    🌐 Website:    ${personalInfo.website}
    📧 Email:      ${personalInfo.email}
    
    ╭─────────────────────────────────────────────────────────────╮
    │                    QUICK LINKS                              │
    ╰─────────────────────────────────────────────────────────────╯
    
    Type 'github' to open my GitHub profile
    Type 'linkedin' to open my LinkedIn profile  
    Type 'medium' to view my blog posts
    Type 'contact' to get my contact information
    `,
    },
  ],
};

const blogsCommand: Command = {
  name: "blogs",
  description: "Read my latest blog posts",
  execute: async () => {
    try {
      const mediumUrl = "https://medium.com/feed/@geeekgod";
      const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;

      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const result: TerminalLine[] = [
          {
            type: "output",
            content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                     LATEST BLOGS                            │
    ╰─────────────────────────────────────────────────────────────╯
          `,
          },
        ];

        data.items.slice(0, 5).forEach((article: any, index: number) => {
          const date = new Date(article.pubDate).toLocaleDateString();
          result.push({
            type: "output",
            content: `
    📝 ${article.title}
    ├── Published: ${date}
    ├── Link: ${article.link}
    └── Categories: ${article.categories.join(", ") || "General"}
            `,
          });
        });

        result.push({
          type: "output",
          content: `
    Read more at: ${personalInfo.medium}
          `,
        });

        return result;
      } else {
        return [
          {
            type: "output",
            content:
              "No blog posts found. Visit my Medium profile for latest articles.",
          },
          { type: "output", content: personalInfo.medium },
        ];
      }
    } catch (error) {
      return [
        {
          type: "error",
          content: "Failed to fetch blog posts. Please try again later.",
        },
        {
          type: "output",
          content: `Visit my blog directly: ${personalInfo.medium}`,
        },
      ];
    }
  },
};

const clearCommand: Command = {
  name: "clear",
  description: "Clear the terminal",
  execute: () => {
    // This will be handled specially in the terminal hook
    return [{ type: "output", content: "" }];
  },
};

const echoCommand: Command = {
  name: "echo",
  description: "Echo back the text",
  execute: (args) => [{ type: "output", content: args.join(" ") || "" }],
};

const themeCommand: Command = {
  name: "theme",
  description: "Change terminal theme",
  execute: (args) => {
    if (args.length === 0) {
      return [
        { type: "output", content: "Usage: theme [theme-name]" },
        {
          type: "output",
          content:
            "Available themes: dark, light, matrix, ubuntu, dracula, cyberpunk",
        },
        { type: "output", content: "Example: theme matrix" },
      ];
    }

    const themeName = args[0].toLowerCase();
    const availableThemes = [
      "dark",
      "light",
      "matrix",
      "ubuntu",
      "dracula",
      "cyberpunk",
    ];

    if (availableThemes.includes(themeName)) {
      // Theme change will be handled by the component
      return [{ type: "success", content: `Theme changed to: ${themeName}` }];
    } else {
      return [
        { type: "error", content: `Invalid theme: ${themeName}` },
        {
          type: "output",
          content: `Available themes: ${availableThemes.join(", ")}`,
        },
      ];
    }
  },
};

const themesCommand: Command = {
  name: "themes",
  description: "View available themes",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                   AVAILABLE THEMES                          │
    ╰─────────────────────────────────────────────────────────────╯
    
    🌙 dark       - Default dark theme with green accents
    ☀️  light      - Clean light theme with blue accents
    🔋 matrix     - Classic green-on-black matrix style
    🐧 ubuntu     - Purple theme inspired by Ubuntu
    🧛 dracula    - Dark theme with pink and purple accents
    🤖 cyberpunk  - Neon cyan and pink cyberpunk style
    
    Usage: theme [theme-name]
    Example: theme matrix
    `,
    },
  ],
};

const historyCommand: Command = {
  name: "history",
  description: "Show command history",
  execute: () => [
    { type: "output", content: "Command history will be displayed here" },
  ],
};

// Quick link commands
const githubCommand: Command = {
  name: "github",
  description: "Open GitHub profile",
  execute: () => {
    window.open(personalInfo.github, "_blank");
    return [{ type: "success", content: `Opening ${personalInfo.github}` }];
  },
};

const linkedinCommand: Command = {
  name: "linkedin",
  description: "Open LinkedIn profile",
  execute: () => {
    window.open(personalInfo.linkedin, "_blank");
    return [{ type: "success", content: `Opening ${personalInfo.linkedin}` }];
  },
};

const mediumCommand: Command = {
  name: "medium",
  description: "Open Medium profile",
  execute: () => {
    window.open(personalInfo.medium, "_blank");
    return [{ type: "success", content: `Opening ${personalInfo.medium}` }];
  },
};

const resumeCommand: Command = {
  name: "resume",
  description: "Download my resume",
  execute: () => [
    { type: "output", content: "Resume download will be implemented here" },
    {
      type: "output",
      content: "For now, please contact me directly for my resume",
    },
  ],
};

export const commands: Command[] = [
  helpCommand,
  aboutCommand,
  contactCommand,
  skillsCommand,
  experienceCommand,
  projectsCommand,
  blogsCommand,
  socialCommand,
  clearCommand,
  echoCommand,
  themeCommand,
  themesCommand,
  historyCommand,
  githubCommand,
  linkedinCommand,
  mediumCommand,
  resumeCommand,
];
