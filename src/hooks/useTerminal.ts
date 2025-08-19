"use client";

import { useState, useCallback } from "react";
import { TerminalLine } from "../types/terminal";
import { commands } from "../utils/commands";

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "output",
      content: `
██████╗ ██╗███████╗██╗  ██╗ █████╗ ██████╗ ██╗  ██╗    ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗
██╔══██╗██║██╔════╝██║  ██║██╔══██╗██╔══██╗██║  ██║    ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║
██████╔╝██║███████╗███████║███████║██████╔╝███████║    ███████╗██║██╔██╗ ██║██║  ███╗███████║
██╔══██╗██║╚════██║██╔══██║██╔══██║██╔══██╗██╔══██║    ╚════██║██║██║╚██╗██║██║   ██║██╔══██║
██║  ██║██║███████║██║  ██║██║  ██║██████╔╝██║  ██║    ███████║██║██║ ╚████║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝

Welcome to my interactive portfolio terminal!
Type 'help' to see available commands.
      `,
    },
  ]);

  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = useCallback((line: TerminalLine) => {
    setHistory((prev) => [...prev, line]);
  }, []);

  const addMultipleToHistory = useCallback((lines: TerminalLine[]) => {
    setHistory((prev) => [...prev, ...lines]);
  }, []);

  const clearTerminal = useCallback(() => {
    setHistory([]);
  }, []);

  const executeCommand = useCallback(
    async (commandInput: string, changeTheme?: (theme: string) => void) => {
      const trimmedCommand = commandInput.trim();

      if (!trimmedCommand) return;

      // Add command to history
      addToHistory({ type: "command", content: trimmedCommand });
      setCommandHistory((prev) => [...prev, trimmedCommand]);

      // Parse command and arguments
      const [commandName, ...args] = trimmedCommand.split(" ");

      // Handle special commands
      if (commandName.toLowerCase() === "clear") {
        clearTerminal();
        return;
      }

      if (
        commandName.toLowerCase() === "theme" &&
        args.length > 0 &&
        changeTheme
      ) {
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
          changeTheme(themeName);
          addToHistory({
            type: "success",
            content: `Theme changed to: ${themeName}`,
          });
          return;
        }
      }

      const command = commands.find(
        (cmd) => cmd.name === commandName.toLowerCase()
      );

      if (command) {
        try {
          const result = await command.execute(args);
          if (Array.isArray(result)) {
            addMultipleToHistory(result);
          } else {
            addToHistory(result);
          }
        } catch (error) {
          addToHistory({
            type: "error",
            content: `Error executing command: ${error}`,
          });
        }
      } else {
        addToHistory({
          type: "error",
          content: `Command not found: ${commandName}. Type 'help' for available commands.`,
        });
      }
    },
    [addToHistory, addMultipleToHistory, clearTerminal]
  );

  return {
    history,
    currentCommand,
    setCurrentCommand,
    executeCommand,
    clearTerminal,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  };
};
