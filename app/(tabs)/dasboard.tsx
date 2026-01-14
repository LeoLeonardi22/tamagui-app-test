import { useRouter } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H2, ScrollView, XStack, YStack, useTheme } from 'tamagui';

// Componente interno che legge il tema
function ScreenContent() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();  // ✅ Ora legge il tema corretto
  const router = useRouter();

  return (
    <YStack 
      f={1} 
      bg="$background"
      pt={insets.top}
      style={{ backgroundColor: theme.background.val }}  // ✅ Safe area color
    >
      
      <ScrollView 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ 
                padding: 16,
                paddingBottom: insets.bottom + 16
              }}
            >
              <YStack f={1} bg="$background" gap="$4" py="$8">
                <XStack gap="$2" ai="center" jc="center">
                <H2>Benvenuto!</H2>
                </XStack>
                <Button size="$6" themeInverse onPress={() => router.push('/login')}>
                  continua
                </Button>
              
              </YStack>
              </ScrollView>
    </YStack>
  );
}

// Componente principale che applica il tema
export default function ScrollableScreen() {
  return (
    <YStack f={1} theme="dark_accent">  
      <ScreenContent />  
    </YStack>
  );
}
