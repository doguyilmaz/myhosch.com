import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export default function CustomTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color='yellow' radius='xs' defaultValue='gallery' mx='auto'>
      <Tabs.List>
        <Tabs.Tab value='gallery' leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value='messages' leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value='settings' leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='gallery'>Gallery tab content</Tabs.Panel>

      <Tabs.Panel value='messages'>Messages tab content</Tabs.Panel>

      <Tabs.Panel value='settings'>Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
