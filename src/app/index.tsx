import React, { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button onClick={onClose}>toggle</button>
    </div>
  );
}

export default App;
