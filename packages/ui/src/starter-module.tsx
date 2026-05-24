"use client";

import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Layers3, Smartphone, Monitor } from "lucide-react-native";

import { Body, Button, Card, Eyebrow, Heading, Input, Section, StatusPill } from "./primitives";
import { colors, spacing } from "./theme";

const moduleStats = [
  { label: "Shared package", value: "@repo/ui" },
  { label: "Platforms", value: "Next + Expo" },
  { label: "System", value: "gluestack recipes" }
];

export function StarterModule() {
  return (
    <ScrollView contentContainerStyle={styles.scroll} style={styles.root}>
      <View style={styles.shell}>
        <Section>
          <StatusPill label="Monorepo ready" />
          <Heading>One product module, two app surfaces.</Heading>
          <Body>
            A shared gluestack-based starter module is rendered by both Next.js and Expo from
            the same package. The UI keeps the interaction model quiet, touch-friendly, and easy
            to extend.
          </Body>
          <View style={styles.actions}>
            <Button accessibilityLabel="Open shared module documentation">Shared UI</Button>
            <Button variant="secondary" accessibilityLabel="Review implementation details">
              Inspect setup
            </Button>
          </View>
        </Section>

        <View style={styles.grid}>
          <Card tone="accent" style={styles.featureCard}>
            <Layers3 color={colors.accent} size={28} />
            <Eyebrow>Module</Eyebrow>
            <Text style={styles.cardTitle}>Reusable by contract</Text>
            <Body>
              Components live in one package, with variants and tokens kept close to the module
              instead of duplicated per app.
            </Body>
          </Card>

          <Card style={styles.featureCard}>
            <View style={styles.platformRow}>
              <Monitor color={colors.ink} size={24} />
              <Smartphone color={colors.ink} size={24} />
            </View>
            <Eyebrow>Runtime</Eyebrow>
            <Text style={styles.cardTitle}>{Platform.OS === "web" ? "Web first view" : "Native first view"}</Text>
            <Body>
              The same React Native primitives render through react-native-web in Next and native
              surfaces in Expo.
            </Body>
          </Card>
        </View>

        <Card>
          <View style={styles.stats}>
            {moduleStats.map((item) => (
              <View key={item.label} style={styles.stat}>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
          <Input accessibilityLabel="Module search" placeholder="Search shared modules" />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.canvas
  },
  scroll: {
    flexGrow: 1
  },
  shell: {
    width: "100%",
    maxWidth: 1080,
    alignSelf: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: 56,
    gap: spacing.xl
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  featureCard: {
    flexGrow: 1,
    flexBasis: 320,
    minHeight: 220
  },
  platformRow: {
    flexDirection: "row",
    gap: spacing.sm
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800"
  },
  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  stat: {
    flexGrow: 1,
    flexBasis: 180,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    paddingLeft: spacing.md
  },
  statValue: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "800"
  },
  statLabel: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 2
  }
});
