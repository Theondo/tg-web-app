import React, { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';

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
