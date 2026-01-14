import { Heart, Search, Star } from '@tamagui/lucide-icons';
import { Card, H2, Text, XStack, YStack } from 'tamagui';

export default function ExploreScreen() {
  return (
    <YStack f={1} bg="$background" p="$4" gap="$4">
      <H2>Esplora</H2>
      
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <XStack gap="$2" ai="center">
            <Search size={24} />
            <H2>Ricerca</H2>
          </XStack>
        </Card.Header>
        <Card.Footer padded>
          <Text>Componente card di Tamagui</Text>
        </Card.Footer>
      </Card>

      <XStack gap="$3" jc="center">
        <Card size="$4" bordered width={150} height={150} ai="center" jc="center">
          <Star size={32} color="$yellow10" />
          <Text mt="$2">Preferiti</Text>
        </Card>
        
        <Card size="$4" bordered width={150} height={150} ai="center" jc="center">
          <Heart size={32} color="$red10" />
          <Text mt="$2">Mi piace</Text>
        </Card>
      </XStack>
    </YStack>
  );
}