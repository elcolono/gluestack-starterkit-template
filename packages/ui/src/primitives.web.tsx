"use client";

import type { ComponentProps, ReactNode } from "react";
import type { TextInputProps } from "react-native";

import { Badge, BadgeText } from "./components/ui/badge";
import { Box } from "./components/ui/box";
import {
  Button as GluestackButton,
  ButtonText
} from "./components/ui/button";
import { Card as GluestackCard } from "./components/ui/card";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { Heading as GluestackHeading } from "./components/ui/heading";
import {
  Input as GluestackInput,
  InputField
} from "./components/ui/input";
import { Text as GluestackText } from "./components/ui/text";
import { VStack } from "./components/ui/vstack";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<
  ComponentProps<typeof GluestackButton>,
  "children" | "variant" | "action"
> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const buttonVariantMap = {
  primary: { action: "primary", variant: "solid" },
  secondary: { action: "secondary", variant: "outline" },
  ghost: { action: "primary", variant: "link" }
} as const;

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const mappedVariant = buttonVariantMap[variant];

  return (
    <GluestackButton
      action={mappedVariant.action}
      variant={mappedVariant.variant}
      {...props}
    >
      <ButtonText>{children}</ButtonText>
    </GluestackButton>
  );
}

type CardProps = Omit<ComponentProps<typeof GluestackCard>, "variant"> & {
  tone?: "default" | "accent";
};

export function Card({ tone = "default", ...props }: CardProps) {
  return (
    <GluestackCard
      size="md"
      variant={tone === "accent" ? "filled" : "elevated"}
      {...props}
    />
  );
}

export function Input({ style, ...props }: TextInputProps) {
  return (
    <GluestackInput size="md" variant="outline">
      <InputField style={style} {...props} />
    </GluestackInput>
  );
}

type HeadingProps = ComponentProps<typeof GluestackHeading>;

export function Heading({ size = "3xl", ...props }: HeadingProps) {
  return <GluestackHeading size={size} {...props} />;
}

type TextProps = ComponentProps<typeof GluestackText>;

export function Body({ size = "md", ...props }: TextProps) {
  return <GluestackText size={size} {...props} />;
}

export function Eyebrow({ size = "sm", ...props }: TextProps) {
  return <GluestackText bold size={size} {...props} />;
}

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <GluestackUIProvider mode="light">
      <Box className="min-h-screen bg-background-0">{children}</Box>
    </GluestackUIProvider>
  );
}

export function StatusPill({ label }: { label: string }) {
  return (
    <Badge action="info" className="self-start" variant="outline">
      <BadgeText>{label}</BadgeText>
    </Badge>
  );
}

type SectionProps = ComponentProps<typeof VStack>;

export function Section({
  children,
  space = "md",
  ...props
}: SectionProps) {
  return (
    <VStack space={space} {...props}>
      {children}
    </VStack>
  );
}
