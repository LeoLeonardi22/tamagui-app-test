import { Circle, TrendingUp, Trophy, Users } from '@tamagui/lucide-icons';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Button,
  Card,
  H2,
  H3,
  H4,
  ScrollView,
  Text,
  XStack,
  YStack,
  useTheme
} from 'tamagui';

function ScreenContent() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  // Dati mock
  const stats = {
    avgScore: 145,
    gamesPlayed: 47,
    strikeRate: 23,
    spareRate: 45,
  };

  const recentGames = [
    { id: 1, date: '15 Gen 2025', center: 'Bowling Milano', score: 178, isRecord: true },
    { id: 2, date: '12 Gen 2025', center: 'Strike Zone', score: 156, isRecord: false },
    { id: 3, date: '08 Gen 2025', center: 'Bowling Milano', score: 142, isRecord: false },
  ];

  return (
    <YStack
      flex={1}
      bg="$background"
      pt={insets.top}
      theme="light_accent"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          p: 16,
          pb: insets.bottom + 16,
        }}
      >
        <YStack gap="$4" py="$4">
          {/* Header */}
          <YStack gap="$2">
            <H2>Ciao, Mario! 🎳</H2>
            <Text color="$gray11">Benvenuto nella tua dashboard</Text>
          </YStack>

          {/* Stats Cards */}
          <XStack gap="$3" flexWrap="wrap">
            <Card flex={1} minWidth={150} bordered elevate padding="$4">
              <YStack gap="$2" ai="center">
                <TrendingUp size={32} color="$blue10" />
                <H3>{stats.avgScore}</H3>
                <Text fontSize="$2" color="$gray11">Media Punteggi</Text>
              </YStack>
            </Card>

            <Card flex={1} minWidth={150} bordered elevate padding="$4">
              <YStack gap="$2" ai="center">
                <Circle size={32} color="$green10" />
                <H3>{stats.gamesPlayed}</H3>
                <Text fontSize="$2" color="$gray11">Partite Giocate</Text>
              </YStack>
            </Card>
          </XStack>

          <XStack gap="$3" flexWrap="wrap">
            <Card flex={1} minWidth={150} bordered elevate padding="$4">
              <YStack gap="$2" ai="center">
                <Trophy size={32} color="$yellow10" />
                <H3>{stats.strikeRate}%</H3>
                <Text fontSize="$2" color="$gray11">Strike Rate</Text>
              </YStack>
            </Card>

            <Card flex={1} minWidth={150} bordered elevate padding="$4">
              <YStack gap="$2" ai="center">
                <Users size={32} color="$purple10" />
                <H3>{stats.spareRate}%</H3>
                <Text fontSize="$2" color="$gray11">Spare Rate</Text>
              </YStack>
            </Card>
          </XStack>

          {/* Recent Games */}
          <YStack gap="$3" mt="$4">
            <H4>Partite Recenti</H4>
            {recentGames.map((game) => (
              <Card key={game.id} bordered padding="$4">
                <XStack jc="space-between" alignItems="center">
                  <YStack gap="$1" flex={1}>
                    <Text fontWeight="600">{game.center}</Text>
                    <Text fontSize="$2" color="$gray11">{game.date}</Text>
                  </YStack>
                  <YStack ai="flex-end" gap="$1">
                    <H3 color={game.isRecord ? '$green10' : '$color'}>{game.score}</H3>
                    {game.isRecord && (
                      <Text fontSize="$1" color="$green10">🏆 Record!</Text>
                    )}
                  </YStack>
                </XStack>
              </Card>
            ))}
          </YStack>

          {/* Quick Actions */}
          <YStack gap="$3" mt="$4">
            <H4>Azioni Rapide</H4>
            <Button size="$5" themeInverse icon={Circle}>
              Nuova Partita
            </Button>
            <Button size="$5">
              Visualizza Statistiche
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}

export default function DashboardScreen() {
  return (
    <YStack flex={1} theme="dark_accent">
      <ScreenContent />
    </YStack>
  );
}