import { Grid, Skeleton, Container, Text } from '@mantine/core';
import { GameCard } from './GameCard';

const child = <Skeleton height={140} radius='md' animate={false} />;

export function GridCards() {
  return (
    <Container my='md'>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <GameCard type='bleach' />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <GameCard type='lol' />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <GameCard type='one_piece' />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
