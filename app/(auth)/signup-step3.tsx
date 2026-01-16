import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    Button,
    H2,
    Label,
    Progress,
    RadioGroup,
    ScrollView,
    XStack,
    YStack,
    useTheme,
} from "tamagui";

function ScreenContent() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const options = [
    { value: "beginner", label: "Beginner" },
    { value: "medium", label: "Medium" },
    { value: "expert", label: "Expert" },
  ];

  return (
    <YStack
      f={1}
      bg="$background"
      pt={insets.top}
      style={{ backgroundColor: theme.background.val }}
    >
      <YStack p="$3">
        <Progress value={75} mt="$4">
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
          <YStack gap="$3" ai="center">
            <H2 textAlign="center">Tell us about your skill level…</H2>
          </YStack>

          <RadioGroup value={selected} onValueChange={setSelected} gap="$3">
            {options.map((option) => (
              <XStack
                key={option.value}
                ai="center"
                gap="$3"
                p="$4"
                br="$4"
                borderWidth={1}
                borderColor={
                  selected === option.value ? "$blue10" : "$borderColor"
                }
                bg={selected === option.value ? "$blue2" : "$background"}
                pressStyle={{ scale: 0.98 }}
                onPress={() => setSelected(option.value)}
              >
                <RadioGroup.Item
                  value={option.value}
                  id={option.value}
                  size="$5"
                >
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor={option.value} f={1} fontSize="$5">
                  {option.label}
                </Label>
              </XStack>
            ))}
          </RadioGroup>

          <Button
            size="$6"
            themeInverse
            mt="$4"
            disabled={!selected}
            opacity={!selected ? 0.5 : 1}
            onPress={() => router.push("/signup-step4")}
          >
            Continua
          </Button>
        </YStack>
      </ScrollView>
    </YStack>
  );
}

export default function SignupStep3() {
  return (
    <YStack f={1} theme="dark_accent">
      <ScreenContent />
    </YStack>
  );
}
