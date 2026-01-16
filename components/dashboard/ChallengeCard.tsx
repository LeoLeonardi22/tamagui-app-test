import React from 'react';
import { Card, Progress, Text, XStack, YStack } from 'tamagui';

interface ChallengeCardProps {
  challenge: {
    id: string;
    icon: string;
    title: string;
    description: string;
    progress: number;
    goal: number;
    xpReward: number;
    bonusReward: string;
    timeLeft: string;
  };
}

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const progressPercent = Math.round(
    (challenge.progress / challenge.goal) * 100
  );

  return (
    <Card
      bordered
      p="$4"
      mb="$3"
      pressStyle={{ scale: 0.98 }}
      animation="bouncy"
    >
      <YStack gap="$3">
        <XStack jc="space-between" ai="center">
          <Text fontSize="$6" fontWeight="bold">
            {challenge.icon} {challenge.title}
          </Text>
          <Card size="$2" bg="$orange5" px="$2" py="$1">
            <Text fontSize="$4" color="$orange11">
              {challenge.timeLeft}
            </Text>
          </Card>
        </XStack>

        <Text fontSize="$5" color="$gray11">
          {challenge.description}
        </Text>

        <YStack gap="$2">
          <XStack jc="space-between">
            <Text fontSize="$3" color="$gray10">
              Progress
            </Text>
            <Text fontSize="$3" fontWeight="600">
              {challenge.progress}/{challenge.goal}
            </Text>
          </XStack>
          <Progress value={progressPercent} height={6}>
            <Progress.Indicator />
          </Progress>
        </YStack>

        <Text fontSize="$3" color="$green10" fontWeight="600">
          Reward: +{challenge.xpReward} XP, {challenge.bonusReward}
        </Text>
      </YStack>
    </Card>
  );
};