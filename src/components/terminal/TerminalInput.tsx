"use client";

import React, { forwardRef, KeyboardEvent } from "react";

interface TerminalInputProps {
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  executeCommand: (command: string) => void;
  commandHistory: string[];
  historyIndex: number;
  setHistoryIndex: (index: number) => void;
  theme: any;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  (
    {
      currentCommand,
      setCurrentCommand,
      executeCommand,
      commandHistory,
      historyIndex,
      setHistoryIndex,
      theme,
    },
    ref
  ) => {
    const availableCommands = [
      "help",
      "about",
      "contact",
      "projects",
      "blogs",
      "skills",
      "experience",
      "social",
      "resume",
      "themes",
      "theme",
      "clear",
      "history",
      "echo",
      "github",
      "linkedin",
      "medium",
    ];

    const handleAutocomplete = () => {
      const input = currentCommand.trim().toLowerCase();
      if (!input) return;

      const matches = availableCommands.filter((cmd) => cmd.startsWith(input));
      if (matches.length === 1) {
        setCurrentCommand(matches[0]);
      } else if (matches.length > 1) {
        // Find common prefix
        let commonPrefix = matches[0];
        for (let i = 1; i < matches.length; i++) {
          while (!matches[i].startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.slice(0, -1);
          }
        }
        if (commonPrefix.length > input.length) {
          setCurrentCommand(commonPrefix);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "Enter":
          e.preventDefault();
          executeCommand(currentCommand);
          setCurrentCommand("");
          setHistoryIndex(-1);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (commandHistory.length > 0) {
            const newIndex =
              historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setCurrentCommand(commandHistory[newIndex] || "");
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (historyIndex >= 0) {
            const newIndex =
              historyIndex < commandHistory.length - 1 ? historyIndex + 1 : -1;
            setHistoryIndex(newIndex);
            setCurrentCommand(
              newIndex === -1 ? "" : commandHistory[newIndex] || ""
            );
          }
          break;
        case "Tab":
          e.preventDefault();
          handleAutocomplete();
          break;
        case "l":
          if (e.ctrlKey) {
            e.preventDefault();
            executeCommand("clear");
          }
          break;
      }
    };

    return (
      <div className="flex items-center">
        <span className={`${theme.primary} mr-2`}>$</span>
        <input
          ref={ref}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`flex-1 bg-transparent outline-none ${theme.text} caret-current text-xs sm:text-sm`}
          placeholder="Type a command..."
          autoComplete="off"
          spellCheck="false"
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>
    );
  }
);

TerminalInput.displayName = "TerminalInput";
