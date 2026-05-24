import { AppProvider, Body, Card, Heading } from '@repo/ui';
import { StyleSheet, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Card>
          <Heading style={styles.heading}>Shared module details</Heading>
          <Body>
            This Expo screen also consumes primitives from @repo/ui, keeping the mobile app aligned
            with the Next.js surface.
          </Body>
        </Card>
      </View>
    </AppProvider>
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
