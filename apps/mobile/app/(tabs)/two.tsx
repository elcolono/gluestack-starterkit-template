import { StyleSheet, View } from 'react-native';
import { Card, GluestackUIProvider, Heading, Text } from '@repo/ui';

export default function DetailsScreen() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Card size="md" variant="elevated">
          <Heading size="xl" style={styles.heading}>Shared module details</Heading>
          <Text>
            This Expo screen also consumes primitives from @repo/ui, keeping the mobile app aligned
            with the Next.js surface.
          </Text>
        </Card>
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    lineHeight: 34,
  },
});
