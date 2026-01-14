import { Chrome } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  H2,
  Input,
  ScrollView,
  Text,
  XStack,
  YStack,
  useTheme,
} from "tamagui";

// Componente interno che legge il tema
function ScreenContent() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const router = useRouter();

  return (
    <YStack
      f={1}
      bg="$background"
      pt={insets.top}
      style={{ backgroundColor: theme.background.val }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: insets.bottom + 16,
        }}
      >
        <YStack f={1} bg="$background" gap="$4" py="$8">
          <XStack gap="$2" ai="center" jc="center">
            <H2>Benvenuto!</H2>
          </XStack>
          <Input placeholder="Email" keyboardType="email-address" size="$6" />
          <Input placeholder="Password" secureTextEntry size="$6" />

          <Button
            size="$6"
            themeInverse
            onPress={() => router.push("/(tabs)/dashboard")}
          >
            Login
          </Button>
          <Button
            size="$6"
            icon={Chrome}
            themeInverse
            onPress={() => router.push("/(tabs)/dashboard")}
          >
            Google Login
          </Button>
          <Button
            size="$6"
            themeInverse
            onPress={() => router.push("/(auth)/signup-step1")}
          >
            Nuovo account
          </Button>

          <XStack gap="$3" jc="center" ai="center">
            <Text color="$gray10">Problems?</Text>
            <Button chromeless size="$3" p="$0">
              Forgot Password
            </Button>
          </XStack>
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
