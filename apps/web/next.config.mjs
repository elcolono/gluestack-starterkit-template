import { withGluestackUI } from "@gluestack/ui-next-adapter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@repo/ui",
    "@expo/html-elements",
    "@gluestack-ui/core",
    "@gluestack-ui/utils",
    "react-native",
    "react-native-web",
    "nativewind",
    "react-native-css-interop",
    "lucide-react-native",
    "@gluestack/ui-next-adapter"
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "react-native$": "react-native-web"
    };

    config.resolve.extensions = [
      ".web.tsx",
      ".web.ts",
      ".tsx",
      ".ts",
      ".web.jsx",
      ".web.js",
      ".jsx",
      ".js",
      ...(config.resolve.extensions ?? [])
    ];

    return config;
  }
};

export default withGluestackUI(nextConfig);
