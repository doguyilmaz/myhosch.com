import '@mantine/core/styles.css';
import '../assets/css/index.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Poppins } from 'next/font/google';

import { theme } from '../theme';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata = {
  title: 'Random Wordle',
  description: 'Random Wordle, play wordle with Naruto, Bleach, One Piece, League of Legends, etc.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en' className={poppins.className}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
