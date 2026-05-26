import { Box, Card, Heading, Text } from "@repo/ui";

export default function NotFound() {
  return (
    <Box className="flex min-h-screen items-center justify-center bg-background-0 p-6">
      <Card size="md" variant="elevated">
        <Heading size="xl">Page not found</Heading>
        <Text>This route does not exist.</Text>
      </Card>
    </Box>
  );
}
