// src/components/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
        style={{ padding: '10px', margin: '10px' }}
      />
      <div style={{ marginTop: '20px' }}>
        <QRCode 
          value={text} 
          size={256}
          fgColor="#000000"
          bgColor="#ffffff"
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
