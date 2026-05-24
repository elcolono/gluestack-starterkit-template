import { AppProvider, StarterModule } from '@repo/ui';

export default function HomeScreen() {
  return (
    <AppProvider>
      <StarterModule />
    </AppProvider>
  );
}
