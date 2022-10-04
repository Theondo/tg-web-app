import React, { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';
import Header from 'shared/ui/header';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
