import { Bell, Settings, User } from '@tamagui/lucide-icons';
import React from 'react';
import { Button, Text, XStack } from 'tamagui';

export const Header = () => {
  return (
    <XStack
      height={60}
      px="$8"
      ai="center"
      jc="space-between"
      bg="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
    >
      <Text fontSize="$6" fontWeight="bold">
        🎳 BowlHub
      </Text>
      <XStack gap="$3">
        <Button circular size="$3" chromeless>
          <Bell size={20} />
        </Button>
        <Button circular size="$3" chromeless>
          <Settings size={20} />
        </Button>
        <Button circular size="$3" chromeless>
          <User size={20} />
        </Button>
      </XStack>
    </XStack>
  );
};