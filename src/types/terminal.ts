export interface TerminalLine {
  type: "command" | "output" | "error" | "success";
  content: string;
}

export interface Command {
  name: string;
  description: string;
  usage?: string;
  execute: (args: string[]) => Promise<TerminalLine[]> | TerminalLine[];
}

export interface Theme {
  name: string;
  background: string;
  text: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  warning: string;
  scrollbar: string;
}

export interface TerminalConfig {
  prompt: string;
  welcomeMessage: string;
  user: string;
  host: string;
}
