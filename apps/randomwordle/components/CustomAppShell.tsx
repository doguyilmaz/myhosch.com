import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header';
import { CookiesBanner } from './Cookie';
import { CustomFooter } from './CustomFooter';

export function CustomAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 100 }}>
      <AppShell.Header h={100} bg='red'>
        <Header />
      </AppShell.Header>
      <AppShell.Main pos='relative'>
        <CookiesBanner />
        {children}
        <CustomFooter />
      </AppShell.Main>
    </AppShell>
  );
}
