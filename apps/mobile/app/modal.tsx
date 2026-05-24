import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { AppProvider, Body, Card, Heading } from '@repo/ui';

export default function ModalScreen() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Card>
          <Heading style={styles.title}>Shared modal</Heading>
          <Body>
            Modal content can use the same @repo/ui primitives as the tab screens and web app.
          </Body>
        </Card>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
  title: {
    fontSize: 28,
    lineHeight: 34,
  },
});
