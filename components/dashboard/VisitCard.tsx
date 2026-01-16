import { ChevronRight, Users } from '@tamagui/lucide-icons';
import React from 'react';
import { Button, Card, Text, XStack, YStack } from 'tamagui';

interface VisitCardProps {
  visit: {
    id: string;
    date: string;
    time: string;
    center: string;
    players: number;
    lane: string;
  };
}

export const VisitCard = ({ visit }: VisitCardProps) => {
  return (
    <Card bordered p="$4" mx="$4">
      <XStack jc="space-between" ai="center">
        <YStack gap="$1" f={1}>
          <Text fontWeight="600" fontSize="$4">
            {visit.center}
          </Text>
          <Text fontSize="$2" color="$gray11">
            {visit.date} at {visit.time}
          </Text>
          <XStack gap="$2" ai="center">
            <Users size={16} color="$gray10" />
            <Text fontSize="$2" color="$gray10">
              {visit.players} players • {visit.lane}
            </Text>
          </XStack>
        </YStack>
        <YStack ai="flex-end">
          <Button size="$2" circular chromeless>
            <ChevronRight size={20} />
          </Button>
        </YStack>
      </XStack>
    </Card>
  );
};