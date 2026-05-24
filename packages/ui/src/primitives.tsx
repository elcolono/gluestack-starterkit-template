"use client";

import type { ComponentProps, ReactNode } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import type { TextInputProps, ViewStyle } from "react-native";
import { ArrowRight, CheckCircle2 } from "lucide-react-native";

import { buttonRecipe, cardRecipe, inputRecipe } from "./gluestack-recipes";
import { colors, radii, spacing } from "./theme";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentProps<typeof Pressable> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({ children, variant = "primary", style, ...props }: ButtonProps) {
  const recipe = buttonRecipe({ variant });

  return (
    <Pressable
      accessibilityRole="button"
      testID={recipe}
      style={({ pressed }) => [
        styles.button,
        variantStyles[variant],
        pressed && styles.buttonPressed,
        typeof style === "function" ? style({ pressed }) : style
      ]}
      {...props}
    >
      <Text style={[styles.buttonText, variant !== "primary" && styles.buttonTextDark]}>
        {children}
      </Text>
      {variant === "primary" ? <ArrowRight color={colors.white} size={18} /> : null}
    </Pressable>
  );
}

type CardProps = ComponentProps<typeof View> & {
  tone?: "default" | "accent";
};

export function Card({ children, tone = "default", style, ...props }: CardProps) {
  const recipe = cardRecipe({ tone });

  return (
    <View
      testID={recipe}
      style={[styles.card, tone === "accent" && styles.cardAccent, style]}
      {...props}
    >
      {children}
    </View>
  );
}

export function Input(props: TextInputProps) {
  const recipe = inputRecipe({ state: "default" });

  return (
    <TextInput
      testID={recipe}
      placeholderTextColor={colors.muted}
      style={styles.input}
      {...props}
    />
  );
}

type TextProps = ComponentProps<typeof Text>;

export function Heading({ style, ...props }: TextProps) {
  return <Text style={[styles.heading, style]} {...props} />;
}

export function Body({ style, ...props }: TextProps) {
  return <Text style={[styles.body, style]} {...props} />;
}

export function Eyebrow({ style, ...props }: TextProps) {
  return <Text style={[styles.eyebrow, style]} {...props} />;
}

export function AppProvider({ children }: { children: ReactNode }) {
  return <View style={styles.provider}>{children}</View>;
}

export function StatusPill({ label }: { label: string }) {
  return (
    <View style={styles.pill}>
      <CheckCircle2 color={colors.accent} size={15} />
      <Text style={styles.pillText}>{label}</Text>
    </View>
  );
}

export function Section({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.section, style]}>{children}</View>;
}

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.ink,
    borderColor: colors.ink
  },
  secondary: {
    backgroundColor: colors.paper,
    borderColor: colors.stroke
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

const styles = StyleSheet.create({
  provider: {
    flex: 1,
    backgroundColor: colors.canvas
  },
  section: {
    gap: spacing.md
  },
  button: {
    minHeight: 48,
    borderRadius: radii.md,
    borderWidth: 1,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }]
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700"
  },
  buttonTextDark: {
    color: colors.ink
  },
  card: {
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.stroke,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    gap: spacing.md
  },
  cardAccent: {
    backgroundColor: colors.accentSoft,
    borderColor: "#aad7ce"
  },
  input: {
    minHeight: 48,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.stroke,
    backgroundColor: colors.paper,
    paddingHorizontal: spacing.md,
    color: colors.ink,
    fontSize: 16
  },
  heading: {
    color: colors.ink,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "800"
  },
  body: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24
  },
  eyebrow: {
    color: colors.brass,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  pill: {
    minHeight: 34,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#aad7ce",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    alignSelf: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.xs
  },
  pillText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "700"
  }
});
