import React from 'react';
import { Card, Image, Text, YStack } from 'tamagui';

interface HighlightCardProps {
  highlight: {
    id: string;
    imageUrl: string;
    icon: string;
    label: string;
    timeAgo: string;
  };
}

export const HighlightCard = ({ highlight }: HighlightCardProps) => {
  return (
    <YStack gap="$1" width={120} pressStyle={{ scale: 0.95 }}>
      <Card bordered width={120} height={120} overflow="hidden" p="$2">
        <Text fontSize="$10">{highlight.icon}</Text>
        <Text fontSize="$4" fontWeight="600">
          {highlight.label}
        </Text>
        <Text fontSize="$1" color="$gray10">
          {highlight.timeAgo}
        </Text>
        <Image
          source={{ uri: highlight.imageUrl }}
          width={120}
          height={120}
        />
      </Card>
    </YStack>
  );
};