import { useState } from 'react';
import { Container, Group, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../assets/css/Header.module.css';

const links = [
  { link: '/games', label: 'Games' },
  { link: '/modes', label: 'Modes' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size='md' className={classes.inner} h='100%'>
        <Group h='100%' px='md' gap={10}>
          <MantineLogo size={28} color='orange' type='mark' />
          <Title order={3} styles={{ root: { color: 'orange', fontWeight: 600 } }}>
            RandomWordle
          </Title>
        </Group>
        <Group gap={5} visibleFrom='xs'>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
      </Container>
    </header>
  );
}
