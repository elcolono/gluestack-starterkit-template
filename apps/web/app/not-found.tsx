import { AppProvider, Body, Card, Heading } from "@repo/ui";

export default function NotFound() {
  return (
    <AppProvider>
      <main className="flex min-h-screen items-center justify-center p-6">
        <Card>
          <Heading size="xl">Page not found</Heading>
          <Body>This route does not exist.</Body>
        </Card>
      </main>
    </AppProvider>
  );
}
