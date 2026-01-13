import React from 'react';

const HelloFigmaMake: React.FC = () => {
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#ffffff',
        display: 'inline-block',
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: '#333333',
        }}
      >
        Hello Figma Make
      </span>
    </div>
  );
};

export default HelloFigmaMake;
