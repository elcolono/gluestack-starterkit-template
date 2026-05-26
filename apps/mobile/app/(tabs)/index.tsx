import { StarterModule } from '@repo/starter';
import { Box, GluestackUIProvider } from '@repo/ui';

export default function HomeScreen() {
  return (
    <GluestackUIProvider mode="light">
      <Box className="flex-1 bg-background-0">
        <StarterModule />
      </Box>
    </GluestackUIProvider>
  );
}
