import React from 'react';
import {PaperProvider} from 'react-native-paper';
import theme from '../config/rnPaper';

export default function AppProvider({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
