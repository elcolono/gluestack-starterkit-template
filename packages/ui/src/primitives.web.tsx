"use client";

import type {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode
} from "react";

import { buttonRecipe, cardRecipe, inputRecipe } from "./gluestack-recipes";
import { colors, radii, spacing } from "./theme";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  accessibilityLabel?: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({
  accessibilityLabel,
  children,
  style,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      aria-label={accessibilityLabel}
      data-gluestack-recipe={buttonRecipe({ variant })}
      style={{
        ...styles.button,
        ...buttonVariants[variant],
        ...style
      }}
      type="button"
      {...props}
    >
      <span style={variant === "primary" ? styles.buttonText : styles.buttonTextDark}>
        {children}
      </span>
      {variant === "primary" ? <span aria-hidden="true">-&gt;</span> : null}
    </button>
  );
}

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "default" | "accent";
};

export function Card({ children, style, tone = "default", ...props }: CardProps) {
  return (
    <section
      data-gluestack-recipe={cardRecipe({ tone })}
      style={{
        ...styles.card,
        ...(tone === "accent" ? styles.cardAccent : null),
        ...style
      }}
      {...props}
    >
      {children}
    </section>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  accessibilityLabel?: string;
};

export function Input({ accessibilityLabel, style, ...props }: InputProps) {
  return (
    <input
      aria-label={accessibilityLabel}
      data-gluestack-recipe={inputRecipe({ state: "default" })}
      style={{ ...styles.input, ...style }}
      {...props}
    />
  );
}

type TextProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Heading({ children, style, ...props }: TextProps) {
  return (
    <h1 style={{ ...styles.heading, ...style }} {...props}>
      {children}
    </h1>
  );
}

export function Body({ children, style, ...props }: TextProps) {
  return (
    <p style={{ ...styles.body, ...style }} {...props}>
      {children}
    </p>
  );
}

export function Eyebrow({ children, style, ...props }: TextProps) {
  return (
    <p style={{ ...styles.eyebrow, ...style }} {...props}>
      {children}
    </p>
  );
}

export function AppProvider({ children }: { children: ReactNode }) {
  return <main style={styles.provider}>{children}</main>;
}

export function StatusPill({ label }: { label: string }) {
  return (
    <div style={styles.pill}>
      <span aria-hidden="true" style={styles.pillMark} />
      <span style={styles.pillText}>{label}</span>
    </div>
  );
}

export function Section({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ ...styles.section, ...style }}>{children}</div>;
}

const buttonVariants = {
  primary: {
    backgroundColor: colors.ink,
    borderColor: colors.ink,
    color: colors.white
  },
  secondary: {
    backgroundColor: colors.paper,
    borderColor: colors.stroke,
    color: colors.ink
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: colors.ink
  }
} satisfies Record<ButtonVariant, CSSProperties>;

const styles = {
  provider: {
    minHeight: "100dvh",
    backgroundColor: colors.canvas,
    color: colors.ink
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md
  },
  button: {
    minHeight: 48,
    borderRadius: radii.md,
    borderStyle: "solid",
    borderWidth: 1,
    paddingInline: 18,
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
    flexDirection: "row",
    gap: spacing.sm,
    cursor: "pointer",
    font: "inherit",
    transition: "opacity 180ms ease, transform 180ms ease"
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 700
  },
  buttonTextDark: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: 700
  },
  card: {
    borderRadius: radii.md,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.stroke,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    display: "flex",
    flexDirection: "column",
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
    borderStyle: "solid",
    borderColor: colors.stroke,
    backgroundColor: colors.paper,
    paddingInline: spacing.md,
    color: colors.ink,
    font: "inherit",
    fontSize: 16
  },
  heading: {
    color: colors.ink,
    fontSize: 34,
    lineHeight: "40px",
    fontWeight: 800,
    margin: 0,
    maxWidth: 720
  },
  body: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: "24px",
    margin: 0,
    maxWidth: 720
  },
  eyebrow: {
    color: colors.brass,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 0,
    margin: 0,
    textTransform: "uppercase"
  },
  pill: {
    minHeight: 34,
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#aad7ce",
    backgroundColor: colors.white,
    paddingInline: spacing.md,
    width: "fit-content",
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "row",
    gap: spacing.xs
  },
  pillMark: {
    width: 9,
    height: 9,
    borderRadius: 999,
    backgroundColor: colors.accent
  },
  pillText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: 700
  }
} satisfies Record<string, CSSProperties>;
