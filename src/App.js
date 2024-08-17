// src/App.js
import React, { useEffect } from 'react';
import './App.css'; // Optional: You can add your own CSS styles

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.tudongchat.com/js/chatbox.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const tudong_chatbox = new window.TuDongChat('T0oFV05YS6KhyCHWLQ79L');
      tudong_chatbox.initial();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <div className="content">
        <iframe
          src="https://dien-bien-phu-chien-than-ejcacz6.gamma.site/"
          style={{ border: 'none', height: 'calc(100vh - 50px)', width: '100%' }}
          title="Embedded Website"
        ></iframe>
      </div>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
