import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from '../assets/css/Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size='md'>
        <Title className={classes.title}>Random Wordle</Title>
        <Text className={classes.description} size='xl' mt='xl'>
          Play a wordle game for Naruto, One Piece, Bleach, LoTR, Star Wars, GoT, Marvel, Disney,
          League of Legends, Dota, Retro Arcade, Cities, Pokemon, NBA, Movies, TV and more!
        </Text>

        <Button
          variant='gradient'
          gradient={{
            from: 'orange',
            to: 'red',
          }}
          size='xl'
          radius='xl'
          className={classes.control}
        >
          Play Now
        </Button>
      </Container>
    </div>
  );
}
