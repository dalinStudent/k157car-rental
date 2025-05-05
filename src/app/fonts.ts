import localFont from 'next/font/local';

export const dmSans = localFont({
  src: [
    { path: './fonts/DMSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/DMSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-dmSans',
  display: 'swap',
});

export const notoSans = localFont({
  src: [
    { path: './fonts/NotoSansSC-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/NotoSansSC-SemiBold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-notoSans',
  display: 'swap',
});

export const kantumruy = localFont({
  src: [
    { path: './fonts/KantumruyPro-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/KantumruyPro-SemiBold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-kantumruy',
  display: 'swap',
});
