import {
  Bell,
  ChevronRight,
  Circle,
  MapPin,
  Settings,
  Star,
  TrendingUp,
  Trophy,
  User,
  Users,
} from "@tamagui/lucide-icons";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Button,
  Card,
  H3,
  H4,
  Image,
  Input,
  Progress,
  ScrollView,
  Text,
  XStack,
  YStack,
  useTheme,
} from "tamagui";

import { UserGreeting } from "@/components/dashboard/UserGreeting";

// Mock Data

const stats = {
  gamesPlayed: 47,
  average: 145,
  strikes: 312,
  lastPlayed: "3 days ago",
  trend: "up", // 'up' | 'down' | 'stable'
  avgScore: 145,
  strikeRate: 23,
  spareRate: 45,
};

const challenges = [
  {
    id: "1",
    icon: "🎯",
    title: "Weekend Warrior",
    description: "Play 3 games this weekend",
    progress: 1,
    goal: 3,
    xpReward: 100,
    bonusReward: "10% off next session",
    timeLeft: "2 days left",
  },
  {
    id: "2",
    icon: "👥",
    title: "Social Butterfly",
    description: "Invite 2 new friends to play",
    progress: 0,
    goal: 2,
    xpReward: 150,
    bonusReward: "Free drink voucher",
    timeLeft: "5 days left",
  },
];

const upcomingVisits = [
  {
    id: "1",
    date: "Sabato, 18 Gen",
    time: "20:00",
    center: "Bowling Milano",
    players: 5,
    lane: "Lane 12",
  },
];

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

const BookingCard = () => {
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

const ChallengeCard = ({
  challenge,
}: {
  challenge: (typeof challenges)[0];
}) => {
  const progressPercent = Math.round(
    (challenge.progress / challenge.goal) * 100
  );

  return (
    <Card
      bordered
      p="$4"
      mb="$3"
      pressStyle={{ scale: 0.98 }}
      animation="bouncy"
    >
      <YStack gap="$3">
        <XStack jc="space-between" ai="center">
          <Text fontSize="$6" fontWeight="bold">
            {challenge.icon} {challenge.title}
          </Text>
          <Card size="$2" bg="$orange5" px="$2" py="$1">
            <Text fontSize="$4" color="$orange11">
              {challenge.timeLeft}
            </Text>
          </Card>
        </XStack>

        <Text fontSize="$5" color="$gray11">
          {challenge.description}
        </Text>

        <YStack gap="$2">
          <XStack jc="space-between">
            <Text fontSize="$3" color="$gray10">
              Progress
            </Text>
            <Text fontSize="$3" fontWeight="600">
              {challenge.progress}/{challenge.goal}
            </Text>
          </XStack>
          <Progress value={progressPercent} height={6}>
            <Progress.Indicator />
          </Progress>
        </YStack>

        <Text fontSize="$3" color="$green10" fontWeight="600">
          Reward: +{challenge.xpReward} XP, {challenge.bonusReward}
        </Text>
      </YStack>
    </Card>
  );
};

const StatsQuickView = () => {
  return (
    <YStack gap="$3">
      <H3>Stitistiche</H3>

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

      <Button size="$4" variant="outlined" iconAfter={ChevronRight}>
        See Details
      </Button>
    </YStack>
  );
};

const UpcomingVisits = () => {
  return (
    <YStack gap="$3" mb="$3">
      <XStack jc="space-between" ai="center" px="$4">
        <H4>Prenotazioni attive</H4>
      </XStack>

      {upcomingVisits.map((visit) => (
        <Card key={visit.id} bordered p="$4" mx="$4">
          <XStack jc="space-between" ai="center">
            <YStack gap="$1" f={1}>
              <Text fontWeight="600" fontSize="$4">
                {visit.center}
              </Text>
              <Text fontSize="$2" color="$gray11">
                {visit.date} at {visit.time}
              </Text>
              <XStack gap="$2" ai="center">
                <Users size={16} color="$gray10" />
                <Text fontSize="$2" color="$gray10">
                  {visit.players} players • {visit.lane}
                </Text>
              </XStack>
            </YStack>
            <YStack ai="flex-end">
              <Button size="$2" circular chromeless>
                <ChevronRight size={20} />
              </Button>
            </YStack>
          </XStack>
        </Card>
      ))}
    </YStack>
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

          <YStack px="$4" mt="$4">
            <StatsQuickView />
          </YStack>

          <YStack mt="$4">
            <RecentHighlights />
          </YStack>

          <YStack mt="$4">
            <UpcomingVisits />
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
