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
      content: "  education     - View my educational background",
    },
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
    
    I develop quality software to help businesses leverage their 
    products and create meaningful user experiences.
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
    
    🌐 Personal Portfolio (This Website)
    ├── Tech: Next.js, TypeScript, Tailwind CSS
    ├── Features: Terminal interface, Multiple themes, SEO optimized
    └── GitHub: ${personalInfo.github}/my_site
    
    🚀 Enterprise Applications at Inka
    ├── Tech: React, Node.js, MongoDB, AWS
    ├── Scale: Handling millions of users
    └── Focus: Insurance technology solutions
    
    📝 Blog Platform Integration
    ├── Tech: Medium API, RSS feeds
    ├── Features: Real-time article fetching
    └── Integration: Seamless content management
    
    🔧 Various Open Source Contributions
    ├── Languages: JavaScript, TypeScript, Python
    ├── Focus: Web development, DevOps tools
    └── Community: Active contributor and maintainer
    
    💡 Side Projects & Experiments
    ├── Game development (started at 14)
    ├── Automation scripts
    └── Performance optimization tools
    
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
    ├── Duration: Current Role
    ├── Location: Mumbai, India
    ├── Focus: Insurance technology solutions
    ├── Responsibilities:
    │   ├── Full-stack development with React & Node.js
    │   ├── System architecture and design
    │   ├── Performance optimization and scaling
    │   ├── Mentoring junior developers
    │   └── Code review and quality assurance
    └── Technologies: React, Node.js, MongoDB, AWS, Docker
    
    💻 4+ Years of Programming Experience
    ├── Started coding at age 14
    ├── Progression: Games → Web Development → Enterprise Software
    ├── Continuous learning and skill development
    └── Passion for creating polished, high-quality software
    
    🎯 Key Achievements:
    ├── Built scalable applications serving millions of users
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

const educationCommand: Command = {
  name: "education",
  description: "View my educational background",
  execute: () => [
    {
      type: "output",
      content: `
    ╭─────────────────────────────────────────────────────────────╮
    │                     EDUCATION                               │
    ╰─────────────────────────────────────────────────────────────╯
    
    🎓 Self-Taught Developer Journey
    ├── Started programming at age 14
    ├── Focus: Practical, hands-on learning
    ├── Continuous learning through:
    │   ├── Online courses and tutorials
    │   ├── Open source contributions
    │   ├── Real-world project experience
    │   └── Industry best practices
    └── Philosophy: Learning by building and doing
    
    📚 Continuous Learning
    ├── Stay updated with latest technologies
    ├── Participate in developer communities
    ├── Read technical blogs and documentation
    └── Experiment with new tools and frameworks
    
    🏆 Practical Experience Over Formal Education
    ├── 4+ years of professional development
    ├── Built applications serving millions of users
    ├── Mentored junior developers
    └── Contributed to open source projects
    `,
    },
  ],
};

export const commands: Command[] = [
  helpCommand,
  aboutCommand,
  contactCommand,
  skillsCommand,
  experienceCommand,
  educationCommand,
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
