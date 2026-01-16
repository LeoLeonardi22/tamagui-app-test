import React from 'react';
import { Card, H4, ScrollView, Text, XStack, YStack, useTheme } from 'tamagui';

export const ThemeDebugger = () => {
  const theme = useTheme();
  
  const colors = Object.entries(theme).filter(([key]) => 
    key.includes('color') || key.includes('background') || key.includes('border')
  );

  return (
    <Card bordered margin="$4">
      <YStack gap="$3" p="$4">
        <H4>🎨 Theme Debugger</H4>
        <ScrollView maxHeight={400}>
          <YStack gap="$2">
            {colors.map(([key, value]) => (
              <XStack key={key} alignItems="center" gap="$2">
                <YStack
                  width={40}
                  height={40}
                  backgroundColor={value as any}
                  borderWidth={1}
                  borderColor="$gray6"
                  borderRadius="$2"
                />
                <YStack flex={1}>
                  <Text fontSize="$2" fontWeight="600">{key}</Text>
                  <Text fontSize="$1" color="$gray10">{String(value)}</Text>
                </YStack>
              </XStack>
            ))}
          </YStack>
        </ScrollView>
      </YStack>
    </Card>
  );
};