import { StarterModule } from "@repo/starter";
import { Box } from "@repo/ui";
import { ThemeToggle } from "./theme-shell";

export default function Home() {
  return (
    <Box className="flex-1 bg-background-0">
      <StarterModule themeControl={<ThemeToggle />} />
    </Box>
  );
}
