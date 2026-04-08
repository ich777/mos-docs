import React from 'react';

const cursorStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cmd-cursor {
    display: inline-block;
    animation: blink 1s step-end infinite;
  }
`;

export default function CMD({ title = 'C:\\Windows\\System32\\cmd.exe', children }) {
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
        {/* Title bar */}
        <div style={{
          background: '#1a1a1a',
          padding: '7px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ color: '#ccc', fontSize: 12, fontFamily: "'Consolas', monospace" }}>
            {title}
          </span>
          <div style={{ display: 'flex', gap: 10 }}>
            <span style={{ color: '#aaa', fontSize: 12 }}>—</span>
            <span style={{ color: '#aaa', fontSize: 12 }}>□</span>
            <span style={{ color: '#aaa', fontSize: 12 }}>✕</span>
          </div>
        </div>

        {/* Content */}
        <pre style={{
          margin: 0,
          padding: '14px 16px',
          background: '#0c0c0c',
          color: '#cccccc',
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

// Blinking cursor
export function CMDCursor() {
  return <span className="cmd-cursor">▌</span>;
}

// Yellow highlight (e.g. for warnings or highlights)
export function CMDHighlight({ children }) {
  return <span style={{ color: '#ffff00' }}>{children}</span>;
}

// Red error text
export function CMDError({ children }) {
  return <span style={{ color: '#ff4444' }}>{children}</span>;
}

// Muted/dim text
export function CMDMuted({ children }) {
  return <span style={{ color: '#666' }}>{children}</span>;
}