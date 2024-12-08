'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card className='hover:shadow-lg transition-shadow'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground'>{description}</p>
        <a
          href={link}
          className='text-primary hover:underline mt-4 inline-block'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn more →
        </a>
      </CardContent>
    </Card>
  );
}
