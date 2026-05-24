/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@repo/ui",
    "react-native",
    "react-native-web",
    "lucide-react-native",
    "@gluestack-ui/nativewind-utils"
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

export default nextConfig;
