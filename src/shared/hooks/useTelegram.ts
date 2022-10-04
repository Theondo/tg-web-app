const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = (): void => {
    tg.close();
  }

  const onToggleButton = (): void => {
    tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user
  }
}