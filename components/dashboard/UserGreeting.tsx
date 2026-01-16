import { getLevelTitle, userData } from '@/data/mockData';
import React from 'react';
import { Card, H2, Progress, Text, XStack, YStack } from 'tamagui';

export const UserGreeting = () => {
  const progressPercent = Math.round((userData.xp / userData.xpToNext) * 100);

  return (
    <Card
      elevate
      bordered
      p="$4"
      mt="$4"
      mx="$4"
      mb="$4"
      pressStyle={{ scale: 0.98 }}
      animation="bouncy"
      gap="$2"
    >
      <YStack gap="$5">
        <H2>Ciao, {userData.firstName}! 🎳</H2>
        <XStack ai="center" gap="$2">
          <Text fontSize="$3" color="$gray11">
            Level {userData.level} - {getLevelTitle(userData.level)}
          </Text>
        </XStack>
      </YStack>
      <YStack gap="$2">
        <Progress value={progressPercent} height={8}>
          <Progress.Indicator animation="bouncy" />
        </Progress>
        <Text fontSize="$6" color="$primarylight" fontWeight="bold">
          {userData.xp}/{userData.xpToNext} XP
        </Text>
      </YStack>
    </Card>
  );
};