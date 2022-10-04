import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTelegram } from 'shared/hooks/useTelegram';
import Header from 'shared/ui/header';
import Pages from 'pages';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Pages />
      <button onClick={onToggleButton}>toggle</button>
    </BrowserRouter>
  );
}

export default App;
