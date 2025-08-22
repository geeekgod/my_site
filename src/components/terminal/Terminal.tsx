"use client";

import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { useTerminal } from "../../hooks/useTerminal";
import { useTheme } from "../../hooks/useTheme";

export const TerminalWrapper: React.FC = () => {
  const searchParams = useSearchParams();
  const {
    history,
    currentCommand,
    setCurrentCommand,
    executeCommand,
    clearTerminal,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  } = useTerminal();

  const { theme, changeTheme } = useTheme();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when terminal is clicked
  const handleTerminalClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and handle URL commands
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Check for command in URL parameters
    const cmd = searchParams.get("cmd");
    if (cmd) {
      setTimeout(() => {
        executeCommand(cmd, changeTheme);
      }, 500); // Small delay to ensure terminal is ready
    }
  }, [searchParams, executeCommand, changeTheme]);

  return (
    <div
      ref={terminalRef}
      onClick={handleTerminalClick}
      className={`w-full h-screen overflow-y-auto font-mono text-xs sm:text-sm cursor-text ${theme.background} ${theme.text} ${theme.scrollbar}`}
    >
      <div className="mb-4">
        <div
          className={`flex items-center space-x-2 mb-2 fixed ${theme.background} w-full p-4 z-100`}
        >
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className={`ml-4 text-sm ${theme.primary}`}>
            rishabh@geeekgod.in
          </span>
        </div>
      </div>
      <div className="p-2 sm:p-4 pb-20">
        {/* Terminal Header */}
        <div className="text-xs opacity-75 mb-4 mt-8">
          Welcome to Rishabh Singh&apos;s interactive terminal portfolio.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Type &apos;help&apos; to see available commands.
        </div>

        {/* Terminal Output */}
        <TerminalOutput history={history} theme={theme} />

        {/* Terminal Input */}
        <TerminalInput
          ref={inputRef}
          currentCommand={currentCommand}
          setCurrentCommand={setCurrentCommand}
          executeCommand={(cmd) => executeCommand(cmd, changeTheme)}
          commandHistory={commandHistory}
          historyIndex={historyIndex}
          setHistoryIndex={setHistoryIndex}
          theme={theme}
        />
      </div>
    </div>
  );
};

export const Terminal = () => {
  return (
    <Suspense>
      <TerminalWrapper />
    </Suspense>
  )
}