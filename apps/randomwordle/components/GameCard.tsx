import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from '../assets/css/GameCard.module.css';

const stats = [
  { value: '34K', label: 'Followers' },
  { value: '187', label: 'Follows' },
  { value: '1.6K', label: 'Posts' },
];

type GameCardProps = {
  type: 'bleach' | 'one_piece' | 'lol';
};

const VALUES: Record<
  GameCardProps['type'],
  {
    bg: string;
    avatar: string;
    title: string;
  }
> = {
  bleach: {
    bg: 'bleach1.jpg',
    avatar: 'grimmjow.jpeg',
    title: 'Bleach',
  },
  one_piece: {
    bg: 'onepiece1.png',
    avatar: 'zoro.jpeg',
    title: 'One Piece',
  },
  lol: {
    bg: 'lol1.jpeg',
    avatar: 'ekko1.jpeg',
    title: 'League of Legends',
  },
};

export function GameCard({ type }: GameCardProps) {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta='center' fz='lg' fw={500}>
        {stat.value}
      </Text>
      <Text ta='center' fz='sm' c='dimmed' lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding='md' radius='lg' className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage: `url(/images/${VALUES[type].bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Avatar
        src={`/images/${VALUES[type].avatar}`}
        size={80}
        radius={80}
        mx='auto'
        mt={-30}
        className={classes.avatar}
      />
      <Text ta='center' fz='lg' fw={500} mt='sm'>
        {VALUES[type].title}
      </Text>
      {/* <Text ta='center' fz='sm' c='dimmed'>
        Fullstack engineer
      </Text> */}
      {/* <Group mt='md' justify='center' gap={30}>
        {items}
      </Group> */}
      <Button fullWidth radius='md' mt='xs' size='xs' variant='light' color='orange'>
        Go to game
      </Button>
    </Card>
  );
}
