import { tva } from "@gluestack-ui/nativewind-utils/tva";

export const buttonRecipe = tva({
  base: "min-h-12 rounded-md px-5 items-center justify-center transition-colors",
  variants: {
    variant: {
      primary: "bg-ink border border-ink",
      secondary: "bg-paper border border-stroke",
      ghost: "bg-transparent border border-transparent"
    }
  }
});

export const cardRecipe = tva({
  base: "rounded-md border border-stroke bg-surface p-5",
  variants: {
    tone: {
      default: "bg-surface",
      accent: "bg-accent-soft"
    }
  }
});

export const inputRecipe = tva({
  base: "min-h-12 rounded-md border border-stroke bg-paper px-4 text-ink",
  variants: {
    state: {
      default: "border-stroke",
      focus: "border-ink",
      invalid: "border-danger"
    }
  }
});
