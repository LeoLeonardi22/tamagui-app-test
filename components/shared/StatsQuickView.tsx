import { Circle, TrendingUp, Trophy, Users } from "@tamagui/lucide-icons";
import React from "react";
import { Card, H3, Text, XStack, YStack } from "tamagui";

import { stats } from "@/data/mockData";

export const StatsQuickView = () => {
  return (
    <YStack gap="$3">
      <XStack gap="$3" fw="wrap">
        <Card f={1} minWidth={150} bordered elevate p="$4">
          <YStack gap="$2" ai="center">
            <TrendingUp size={32} color="$blue10" />
            <H3>{stats.avgScore}</H3>
            <Text fontSize="$2" color="$gray11">
              Media Punteggi
            </Text>
          </YStack>
        </Card>

        <Card f={1} minWidth={150} bordered elevate p="$4">
          <YStack gap="$2" ai="center">
            <Circle size={32} color="$green10" />
            <H3>{stats.gamesPlayed}</H3>
            <Text fontSize="$2" color="$gray11">
              Partite Giocate
            </Text>
          </YStack>
        </Card>
      </XStack>

      <XStack gap="$3" fw="wrap">
        <Card f={1} minWidth={150} bordered elevate p="$4">
          <YStack gap="$2" ai="center">
            <Trophy size={32} color="$yellow10" />
            <H3>{stats.strikeRate}%</H3>
            <Text fontSize="$2" color="$gray11">
              Strike Rate
            </Text>
          </YStack>
        </Card>

        <Card f={1} minWidth={150} bordered elevate p="$4">
          <YStack gap="$2" ai="center">
            <Users size={32} color="$purple10" />
            <H3>{stats.spareRate}%</H3>
            <Text fontSize="$2" color="$gray11">
              Spare Rate
            </Text>
          </YStack>
        </Card>
      </XStack>
      <Text fontSize="$1" color="$gray10" textAlign="center">
        Last played: {stats.lastPlayed}
      </Text>
    </YStack>
  );
};
