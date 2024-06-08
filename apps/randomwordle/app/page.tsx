'use client';
import { CustomAppShell } from '../components/CustomAppShell';
import { CustomFooter } from '../components/CustomFooter';
import { GridAsymmetrical } from '../components/GridAsymetrical';
import { GridCards } from '../components/GridCards';
import { Hero } from '../components/Hero';
import CustomTabs from '../components/Tabs';

export default function HomePage() {
  return (
    <CustomAppShell>
      <Hero />
      {/* <CustomTabs /> */}
      <GridCards />
      <GridAsymmetrical />
      {/* <CustomFooter /> */}
    </CustomAppShell>
  );
}
