import { AppProvider, StarterModule } from "@repo/ui";

export default function Home() {
  return (
    <AppProvider>
      <StarterModule />
    </AppProvider>
  );
}
