import React, { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
