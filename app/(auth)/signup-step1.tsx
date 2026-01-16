import { Chrome } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  H2,
  Input,
  Progress,
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
      style={{ backgroundColor: theme.background.val }} // ✅ Safe area color
    >
      <YStack p="$3">
        <Progress value={25} mt="$4">
          <Progress.Indicator animation="bouncy" />
        </Progress>
      </YStack>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: insets.bottom + 16,
        }}
      >
        <YStack gap="$4" py="$8" jc="center" minHeight="100%">
          <XStack gap="$2" ai="center" jc="center">
            <H2>Nuovo account</H2>
          </XStack>

          <XStack gap="$4">
            <Input f={1} placeholder="Nome" size="$6" />
            <Input f={1} placeholder="Cognome" size="$6" />
          </XStack>

          <Input placeholder="Email" keyboardType="email-address" size="$6" />
          <Input placeholder="Password" secureTextEntry size="$6" />
          <Input placeholder="Conferma Password" secureTextEntry size="$6" />

          <YStack gap="$4" mt="$4">
            <Button
              size="$6"
              themeInverse
              onPress={() => router.push("/signup-step2")}
            >
              Conferma
            </Button>

            <XStack ai="center" jc="center">
              <Text>Oppure</Text>
            </XStack>

            <Button size="$6" icon={Chrome} themeInverse>
              Google Login
            </Button>
          </YStack>

          <XStack gap="$3" jc="center" ai="center" mt="$6">
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
