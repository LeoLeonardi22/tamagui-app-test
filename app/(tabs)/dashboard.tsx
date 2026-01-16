import {
  Bell,
  ChevronRight,
  MapPin,
  Settings,
  Star,
  User,
} from "@tamagui/lucide-icons";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  Card,
  H3,
  H4,
  Image,
  ScrollView,
  Text,
  XStack,
  YStack,
  useTheme,
} from "tamagui";

import { BookingCard } from "@/components/dashboard/BookingCard";
import { ChallengeCard } from "@/components/dashboard/ChallengeCard";
import { UserGreeting } from "@/components/dashboard/UserGreeting";
import { VisitCard } from "@/components/dashboard/VisitCard";
import { StatsQuickView } from "@/components/shared/StatsQuickView";
import { challenges, upcomingVisits } from "@/data/mockData";

// Mock Data

const recentHighlights = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎳",
    label: "Perfect Strike!",
    timeAgo: "3 days ago",
  },
  {
    id: "2",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎉",
    label: "Group Fun",
    timeAgo: "1 week ago",
  },
  {
    id: "3",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🏆",
    label: "High Score",
    timeAgo: "2 weeks ago",
  },
  {
    id: "14",
    imageUrl: "https://via.placeholder.com/120",
    icon: "🎳",
    label: "Perfect Strike!",
    timeAgo: "8 days ago",
  },
];

const nearbyCenters = [
  {
    id: "1",
    name: "Bowling Milano",
    distance: "1.2 km",
    rating: 4.5,
    address: "Via Roma 123, Milano",
  },
  {
    id: "2",
    name: "Strike Zone",
    distance: "3.5 km",
    rating: 4.7,
    address: "Corso Venezia 45, Milano",
  },
];

// Components
const Header = () => {
  return (
    <XStack
      height={60}
      px="$8"
      ai="center"
      jc="space-between"
      bg="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
    >
      <Text fontSize="$6" fontWeight="bold">
        🎳 BowlHub
      </Text>
      <XStack gap="$3">
        <Button circular size="$3" chromeless>
          <Bell size={20} />
        </Button>
        <Button circular size="$3" chromeless>
          <Settings size={20} />
        </Button>
        <Button circular size="$3" chromeless>
          <User size={20} />
        </Button>
      </XStack>
    </XStack>
  );
};

const RecentHighlights = () => {
  return (
    <YStack gap="$2" mb="$3">
      <XStack jc="space-between" ai="center" px="$4">
        <H4>Ultimi risultati</H4>
        <Button size="$4" chromeless iconAfter={ChevronRight}>
          View All
        </Button>
      </XStack>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack gap="$2" px="$4">
          {recentHighlights.map((highlight) => (
            <YStack
              key={highlight.id}
              gap="$1"
              width={120}
              pressStyle={{ scale: 0.95 }}
            >
              <Card bordered width={120} height={120} overflow="hidden" p="$2">
                <Text fontSize="$10">{highlight.icon}</Text>
                <Text fontSize="$4" fontWeight="600">
                  {highlight.label}
                </Text>
                <Text fontSize="$1" color="$gray10">
                  {highlight.timeAgo}
                </Text>
                <Image
                  source={{ uri: highlight.imageUrl }}
                  width={120}
                  height={120}
                />
              </Card>
            </YStack>
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  );
};

const NearbyCenters = () => {
  return (
    <YStack gap="$3" mb="$3">
      <XStack jc="space-between" ai="center" px="$4">
        <H4>📍 NEARBY CENTERS</H4>
      </XStack>

      {nearbyCenters.map((center) => (
        <Card key={center.id} bordered p="$4" mx="$4">
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
      ))}
    </YStack>
  );
};

// Main Screen Content
function ScreenContent() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <YStack
      f={1}
      bg="$background"
      pt={insets.top}
      style={{ backgroundColor: theme.background.val }}
    >
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 16,
        }}
      >
        <YStack pb="$4">
          <UserGreeting />
          <BookingCard />

          <YStack px="$4" gap="$3">
            <H4>Challenge in atto</H4>
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </YStack>

          <YStack px="$4" mt="$4" mb="$4" gap="$3">
            <H3>Statistiche</H3>
            <StatsQuickView />
            <Button size="$4" variant="outlined" iconAfter={ChevronRight}>
              See Details
            </Button>
          </YStack>

          <YStack mt="$4">
            <YStack gap="$2" mb="$3">
              <XStack jc="space-between" ai="center" px="$4">
                <H4>Ultimi risultati</H4>
                <Button size="$4" chromeless iconAfter={ChevronRight}>
                  View All
                </Button>
              </XStack>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <XStack gap="$2" px="$4">
                  <RecentHighlights />
                </XStack>
              </ScrollView>
            </YStack>
          </YStack>

          <YStack mt="$4" gap="$3" mb="$3">
            <XStack jc="space-between" ai="center" px="$4">
              <H4>Prenotazioni attive</H4>
            </XStack>
            {upcomingVisits.map((visit) => (
              <VisitCard key={visit.id} visit={visit} />
            ))}
          </YStack>

          <YStack mt="$4">
            <NearbyCenters />
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}

export default function DashboardScreen() {
  return (
    <YStack f={1} theme="dark_accent">
      <ScreenContent />
    </YStack>
  );
}
