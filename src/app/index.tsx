import React, { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';

function App() {
  const { tg, onClose } = useTelegram();

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
