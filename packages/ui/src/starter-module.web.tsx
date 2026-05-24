"use client";

import type { CSSProperties } from "react";

import { Body, Button, Card, Eyebrow, Heading, Input, Section, StatusPill } from "./primitives";
import { colors, spacing } from "./theme";

const moduleStats = [
  { label: "Shared package", value: "@repo/ui" },
  { label: "Platforms", value: "Next + Expo" },
  { label: "System", value: "gluestack recipes" }
];

export function StarterModule() {
  return (
    <div style={styles.root}>
      <div style={styles.shell}>
        <Section>
          <StatusPill label="Monorepo ready" />
          <Heading>One product module, two app surfaces.</Heading>
          <Body>
            A shared gluestack-based starter module is rendered by both Next.js and Expo from
            the same package. The UI keeps the interaction model quiet, touch-friendly, and easy
            to extend.
          </Body>
          <div style={styles.actions}>
            <Button accessibilityLabel="Open shared module documentation">Shared UI</Button>
            <Button variant="secondary" accessibilityLabel="Review implementation details">
              Inspect setup
            </Button>
          </div>
        </Section>

        <div style={styles.grid}>
          <Card tone="accent" style={styles.featureCard}>
            <span aria-hidden="true" style={styles.symbol}>
              Layers
            </span>
            <Eyebrow>Module</Eyebrow>
            <h2 style={styles.cardTitle}>Reusable by contract</h2>
            <Body>
              Components live in one package, with variants and tokens kept close to the module
              instead of duplicated per app.
            </Body>
          </Card>

          <Card style={styles.featureCard}>
            <div style={styles.platformRow}>
              <span style={styles.platformChip}>Web</span>
              <span style={styles.platformChip}>Native</span>
            </div>
            <Eyebrow>Runtime</Eyebrow>
            <h2 style={styles.cardTitle}>Web first view</h2>
            <Body>
              Next receives server-rendered DOM with critical styles, while Expo keeps the native
              React Native surface.
            </Body>
          </Card>
        </div>

        <Card>
          <div style={styles.stats}>
            {moduleStats.map((item) => (
              <div key={item.label} style={styles.stat}>
                <strong style={styles.statValue}>{item.value}</strong>
                <span style={styles.statLabel}>{item.label}</span>
              </div>
            ))}
          </div>
          <Input accessibilityLabel="Module search" placeholder="Search shared modules" />
        </Card>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100dvh",
    backgroundColor: colors.canvas
  },
  shell: {
    width: "100%",
    maxWidth: 1080,
    marginInline: "auto",
    paddingInline: spacing.lg,
    paddingBlock: 56,
    display: "flex",
    flexDirection: "column",
    gap: spacing.xl
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  featureCard: {
    flexGrow: 1,
    flexBasis: 320,
    minHeight: 220
  },
  symbol: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: 800
  },
  platformRow: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.sm
  },
  platformChip: {
    borderRadius: 999,
    border: `1px solid ${colors.stroke}`,
    color: colors.ink,
    fontSize: 13,
    fontWeight: 800,
    paddingBlock: 5,
    paddingInline: 10
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 22,
    lineHeight: "28px",
    fontWeight: 800,
    margin: 0
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md
  },
  stat: {
    flexGrow: 1,
    flexBasis: 180,
    borderLeft: `3px solid ${colors.accent}`,
    paddingLeft: spacing.md,
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  statValue: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: 800
  },
  statLabel: {
    color: colors.muted,
    fontSize: 13
  }
} satisfies Record<string, CSSProperties>;
