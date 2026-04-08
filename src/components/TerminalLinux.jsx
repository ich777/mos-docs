import React from 'react';

const cursorStyle = `
  @keyframes blink-linux {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .linux-cursor {
    display: inline-block;
    color: #00ff00;
    animation: blink-linux 1s step-end infinite;
  }
`;

export default function TerminalLinux({ title = 'bash — user@linux: ~', children }) {
  return (
    <>
      <style>{cursorStyle}</style>
      <div style={{
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid #555',
        marginBottom: '1.5rem',
        fontFamily: 'monospace',
      }}>
        <div style={{
          background: '#2b2b2b',
          padding: '8px 14px',
        }}>
          <span style={{ color: '#aaa', fontSize: 12, fontFamily: "'Consolas', monospace" }}>{title}</span>
        </div>
        <pre style={{
          margin: 0,
          padding: '14px 16px',
          background: '#1e1e1e',
          color: '#d4d4d4',
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontSize: '13.5px',
          lineHeight: 1.7,
          overflowX: 'auto',
          whiteSpace: 'pre',
        }}>
          {children}
        </pre>
      </div>
    </>
  );
}

export function LinuxCursor() {
  return <span className="linux-cursor">▊</span>;
}

// Bright green prompt text — use for username@host and ~ path
export function LinuxPrompt({ children }) {
  return <span style={{ color: '#00ff00' }}>{children}</span>;
}

// Slightly darker green for the path (~)
export function LinuxPath({ children }) {
  return <span style={{ color: '#00cc00' }}>{children}</span>;
}

export function LinuxSuccess({ children }) {
  return <span style={{ color: '#00ff00' }}>{children}</span>;
}

export function LinuxError({ children }) {
  return <span style={{ color: '#ff4444' }}>{children}</span>;
}

export function LinuxMuted({ children }) {
  return <span style={{ color: '#666' }}>{children}</span>;
}