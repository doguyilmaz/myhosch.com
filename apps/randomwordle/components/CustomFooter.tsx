import { Text, Container, ActionIcon, Group, rem, Title } from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
  IconBrandFacebook,
  IconBrandValorant,
  IconBrandSteam,
  IconBrandXbox,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../assets/css/CustomFooter.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Games', link: '#' },
      { label: 'Modes', link: '#' },
      { label: 'Learn', link: '#' },
      { label: 'Community', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export function CustomFooter() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component='a'
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group gap={5} wrap='nowrap'>
            <MantineLogo size={28} color='orange' type='mark' />
            <Title order={3} styles={{ root: { color: 'orange', fontWeight: 600 } }}>
              RandomWordle
            </Title>
          </Group>
          <Text size='xs' c='dimmed' className={classes.description}>
            Play and learn the game of Wordle in your browser
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c='dimmed' size='sm' ta='center'>
          © 2024 randomwordle.com • All rights reserved.
        </Text>
        <Text c='dimmed' size='sm' ta='center'>
          Made with 🧡 by @randomwordle
        </Text>

        <Group gap={0} className={classes.social} justify='flex-end' wrap='nowrap'>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandSteam style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandValorant style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='orange' variant='subtle'>
            <IconBrandXbox style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
