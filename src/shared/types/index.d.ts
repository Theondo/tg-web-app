export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        close: () => any;
        ready: () => any;
        initDataUnsafe: {
          user?: {
            username?: string;
          };
        };
        MainButton: {
          color: string;
          disable: () => any;
          enable: () => any;
          hide: () => any;
          hideProgress: () => any;
          isActive: boolean;
          isProgressVisible: boolean;
          isVisible: boolean;
          offClick: () => any;
          show: () => any;
          setParams: (params: { text?: string, color?: string, text_color?: string, is_active?: boolean, is_visible?: boolean }) => any;
        }
      }
    };
  }
}