'use client';

import { createTheme } from '@mantine/core';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600'],
});

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: poppins.style.fontFamily,
});
