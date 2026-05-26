"use client";

import type { ReactNode } from "react";
import { ScrollView } from "react-native";

import {
  Badge,
  BadgeText,
  Box,
  Card,
  Heading,
  HStack,
  Text,
  VStack
} from "@repo/ui";

const platformCards = [
  {
    badge: "Next.js",
    action: "info",
    title: "Production web app",
    text: "App Router, SSR, Tailwind, and the shared Gluestack UI package are already connected.",
    detail: "apps/web"
  },
  {
    badge: "Expo",
    action: "success",
    title: "Native runtime",
    text: "Ship iOS, Android, and Expo web surfaces from the same workspace foundation.",
    detail: "apps/mobile"
  },
  {
    badge: "Shared",
    action: "warning",
    title: "Universal packages",
    text: "UI primitives and starter screens live in packages that both targets can consume.",
    detail: "packages/ui + packages/starter"
  }
] as const;

const commandItems = [
  {
    label: "Install",
    command: "pnpm install",
    text: "Install the full workspace."
  },
  {
    label: "Next.js",
    command: "pnpm dev:web",
    text: "Run the web app locally."
  },
  {
    label: "Expo",
    command: "pnpm dev:mobile",
    text: "Start the Expo native app."
  },
  {
    label: "Checks",
    command: "pnpm --filter web typecheck",
    text: "Validate the web TypeScript surface."
  }
] as const;

type StarterModuleProps = {
  themeControl?: ReactNode;
};

export function StarterModule({ themeControl }: StarterModuleProps) {
  return (
    <ScrollView className="flex-1 bg-background-0">
      <Box className="w-full max-w-[1120px] self-center mx-auto px-6 py-10">
        <VStack space="3xl">
          <HStack className="flex-wrap items-center justify-between" space="md">
            <HStack className="flex-wrap items-center" space="md">
              <Badge action="info" className="self-start" variant="outline">
                <BadgeText>Universal Template</BadgeText>
              </Badge>
              <HStack className="flex-wrap items-center" space="sm">
                <Badge action="muted">
                  <BadgeText>Next.js 15</BadgeText>
                </Badge>
                <Badge action="muted">
                  <BadgeText>Expo</BadgeText>
                </Badge>
                <Badge action="muted">
                  <BadgeText>Gluestack</BadgeText>
                </Badge>
              </HStack>
            </HStack>
            {themeControl ? <Box className="shrink-0">{themeControl}</Box> : null}
          </HStack>

          <HStack className="flex-wrap items-start" space="3xl">
            <VStack className="min-w-[300px] flex-1" space="lg">
              <VStack space="md">
                <Heading size="4xl">
                  Universal starter for Next.js and Expo apps.
                </Heading>
                <Text size="lg">
                  A ready-to-extend monorepo template for building web and
                  native product surfaces from one shared Gluestack UI system.
                </Text>
              </VStack>

              <HStack className="flex-wrap" space="sm">
                <Badge action="success" variant="outline">
                  <BadgeText>One workspace</BadgeText>
                </Badge>
                <Badge action="info" variant="outline">
                  <BadgeText>Shared components</BadgeText>
                </Badge>
                <Badge action="warning" variant="outline">
                  <BadgeText>Light and dark mode</BadgeText>
                </Badge>
              </HStack>
            </VStack>

            <Box className="min-w-[280px] flex-1 rounded-md border border-outline-200 bg-background-50 p-5">
              <VStack space="lg">
                <HStack className="items-center justify-between" space="md">
                  <Text bold size="sm">
                    Template map
                  </Text>
                  <Badge action="success">
                    <BadgeText>Ready</BadgeText>
                  </Badge>
                </HStack>

                <VStack space="md">
                  <HStack className="items-center justify-between border-b border-outline-100 pb-3">
                    <Text size="sm">Web app</Text>
                    <Text bold size="sm">
                      Next.js
                    </Text>
                  </HStack>
                  <HStack className="items-center justify-between border-b border-outline-100 pb-3">
                    <Text size="sm">Native app</Text>
                    <Text bold size="sm">
                      Expo
                    </Text>
                  </HStack>
                  <HStack className="items-center justify-between">
                    <Text size="sm">Shared package</Text>
                    <Text bold size="sm">
                      UI + Starter
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </HStack>

          <HStack className="flex-wrap" space="md">
            {platformCards.map((item) => (
              <Card
                className="min-w-[260px] flex-1 border border-outline-100"
                key={item.title}
                size="lg"
                variant="elevated"
              >
                <VStack space="lg">
                  <Badge action={item.action} className="self-start">
                    <BadgeText>{item.badge}</BadgeText>
                  </Badge>
                  <VStack space="sm">
                    <Heading size="xl">{item.title}</Heading>
                    <Text size="md">{item.text}</Text>
                  </VStack>
                  <Text bold size="sm">
                    {item.detail}
                  </Text>
                </VStack>
              </Card>
            ))}
          </HStack>

          <VStack
            className="rounded-md border border-outline-100 bg-background-50 p-5"
            space="xl"
          >
            <HStack className="flex-wrap items-end justify-between" space="md">
              <VStack className="min-w-[260px] flex-1" space="xs">
                <Text bold size="sm">
                  Commands
                </Text>
                <Heading size="2xl">Start web, native, or checks.</Heading>
              </VStack>
              <Text className="max-w-[360px]" size="sm">
                The root scripts keep the common workflows discoverable while
                each app still owns its platform-specific setup.
              </Text>
            </HStack>

            <HStack className="flex-wrap" space="md">
              {commandItems.map((item) => (
                <Box
                  className="min-w-[240px] flex-1 border-l-4 border-primary-500 bg-background-0 p-4"
                  key={item.command}
                >
                  <VStack space="sm">
                    <Text bold size="sm">
                      {item.label}
                    </Text>
                    <Text className="font-mono" size="md">
                      {item.command}
                    </Text>
                    <Text size="sm">{item.text}</Text>
                  </VStack>
                </Box>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}
