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
  name: 'dark',
  colors: {
    bgWhite: '#202024',
    bgGray: '#09090A',
    brandcolorPrimaryLight: '#8E85FF',
    brandcolorPrimaryDefault: '#4F46BB',
    textcolorPrimary: '#fff',
    textcolorSecondary: '#6D6C7B',
    outlineGrayDark: '#BBB8D9',
  },
};
