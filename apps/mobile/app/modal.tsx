import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { Card, GluestackUIProvider, Heading, Text } from '@repo/ui';

export default function ModalScreen() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Card size="md" variant="elevated">
          <Heading size="xl" style={styles.title}>Shared modal</Heading>
          <Text>
            Modal content can use the same @repo/ui primitives as the tab screens and web app.
          </Text>
        </Card>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
  title: {
    fontSize: 28,
    lineHeight: 34,
  },
});
