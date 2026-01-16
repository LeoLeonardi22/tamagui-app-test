import { MapPin, Star } from '@tamagui/lucide-icons';
import React from 'react';
import { Button, Card, Text, XStack, YStack } from 'tamagui';

interface CenterCardProps {
  center: {
    id: string;
    name: string;
    distance: string;
    rating: number;
    address: string;
  };
}

export const CenterCard = ({ center }: CenterCardProps) => {
  return (
    <Card bordered p="$4" mx="$4">
      <XStack jc="space-between" ai="center">
        <YStack gap="$1" f={1}>
          <Text fontWeight="600" fontSize="$4">
            {center.name}
          </Text>
          <Text fontSize="$2" color="$gray11">
            {center.address}
          </Text>
          <XStack gap="$3" ai="center" mt="$1">
            <XStack gap="$1" ai="center">
              <MapPin size={14} color="$gray10" />
              <Text fontSize="$2" color="$gray10">
                {center.distance}
              </Text>
            </XStack>
            <XStack gap="$1" ai="center">
              <Star size={14} color="$yellow10" />
              <Text fontSize="$2" color="$gray10">
                {center.rating}
              </Text>
            </XStack>
          </XStack>
        </YStack>
        <Button size="$3" themeInverse>
          Book
        </Button>
      </XStack>
    </Card>
  );
};