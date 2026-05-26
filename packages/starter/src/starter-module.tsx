"use client";

import { ScrollView } from "react-native";

import {
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonText,
  Card,
  Heading,
  HStack,
  Input,
  InputField,
  Text,
  VStack
} from "@repo/ui";

export function StarterModule() {
  return (
    <ScrollView className="flex-1 bg-background-0">
      <Box className="w-full max-w-[1080px] self-center mx-auto px-6 py-12">
        <VStack space="xl">
          <VStack space="md">
            <Badge action="info" className="self-start" variant="outline">
              <BadgeText>gluestack-ui v3</BadgeText>
            </Badge>
            <Heading size="3xl">Basic shared components.</Heading>
            <Text size="md">
              The starter package composes generated gluestack components for
              both Next.js and Expo. Styling stays on the generated defaults,
              with only layout classes around the module.
            </Text>
            <HStack className="flex-wrap" space="sm">
              <Button action="primary" variant="solid">
                <ButtonText>Solid action</ButtonText>
              </Button>
              <Button action="secondary" variant="outline">
                <ButtonText>Outline action</ButtonText>
              </Button>
              <Button action="primary" variant="link">
                <ButtonText>Link action</ButtonText>
              </Button>
            </HStack>
          </VStack>

          <HStack className="flex-wrap" space="md">
            <Card className="min-w-[280px] flex-1" size="md" variant="elevated">
              <Text bold size="sm">
                Card
              </Text>
              <Heading size="xl">Default surface</Heading>
              <Text size="md">
                Cards, headings, text, buttons, badges, stacks, and inputs come
                directly from the gluestack CLI output in @repo/ui.
              </Text>
            </Card>

            <Card className="min-w-[280px] flex-1" size="md" variant="filled">
              <Text bold size="sm">
                Form
              </Text>
              <Heading size="xl">Input primitive</Heading>
              <Input size="md" variant="outline">
                <InputField placeholder="Search components" />
              </Input>
              <HStack className="flex-wrap" space="sm">
                <Badge action="success">
                  <BadgeText>Shared</BadgeText>
                </Badge>
                <Badge action="muted" variant="outline">
                  <BadgeText>Default</BadgeText>
                </Badge>
              </HStack>
            </Card>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}
