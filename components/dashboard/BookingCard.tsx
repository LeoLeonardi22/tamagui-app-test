import React from "react";
import {
    Button,
    Card,
    H3,
    Input,
    XStack,
    YStack
} from "tamagui";

export const BookingCard = () => {
  return (
    <Card
      elevate
      bordered
      p="$5"
      mx="$4"
      mb="$4"
      pressStyle={{ scale: 0.98 }}
      animation="bouncy"
    >
      <YStack gap="$4">
        <XStack ai="center" gap="$2">
          <H3>Book next Session</H3>
        </XStack>
        <Input placeholder="Data" size="$4" />
        <Input placeholder="Ora" secureTextEntry size="$4" />
        <Button size="$5" themeInverse fontWeight="bold">
          PRENOTA PISTA
        </Button>
      </YStack>
    </Card>
  );
};
