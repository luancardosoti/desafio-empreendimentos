type Theme = {
  name: string;
  colors: {
    bgWhite: string;
    bgGray: string;
    brandcolorPrimaryLight: string;
    brandcolorPrimaryDefault: string;
    textcolorPrimary: string;
    textcolorSecondary: string;
    outlineGrayDark: string;
  };
};

export const theme: Theme = {
  name: 'light',
  colors: {
    bgWhite: '#ffffff',
    bgGray: '#F8F7FC',
    brandcolorPrimaryLight: '#8E85FF',
    brandcolorPrimaryDefault: '#4F46BB',
    textcolorPrimary: '#302E45',
    textcolorSecondary: '#6D6C7B',
    outlineGrayDark: '#BBB8D9',
  },
};
