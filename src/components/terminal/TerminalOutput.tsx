"use client";

import React from "react";
import { TerminalLine } from "../../types/terminal";

interface TerminalOutputProps {
  history: TerminalLine[];
  theme: any;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  history,
  theme,
}) => {
  const renderOutput = (line: TerminalLine, index: number) => {
    switch (line.type) {
      case "command":
        return (
          <div key={index} className="flex items-center mb-1">
            <span className={`${theme.primary} mr-2`}>$</span>
            <span className={theme.text}>{line.content}</span>
          </div>
        );
      case "output":
        return (
          <div
            key={index}
            className={`mb-1 whitespace-pre-wrap ${theme.text}`}
            dangerouslySetInnerHTML={{ __html: line.content }}
          />
        );
      case "error":
        return (
          <div key={index} className={`mb-1 ${theme.error}`}>
            {line.content}
          </div>
        );
      case "success":
        return (
          <div key={index} className={`mb-1 ${theme.success}`}>
            {line.content}
          </div>
        );
      default:
        return (
          <div key={index} className={`mb-1 ${theme.text}`}>
            {line.content}
          </div>
        );
    }
  };

  return (
    <div className="mb-4">
      {history.map((line, index) => renderOutput(line, index))}
    </div>
  );
};
