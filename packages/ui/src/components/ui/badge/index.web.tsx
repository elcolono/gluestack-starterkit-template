'use client';
import React, { createContext, useContext, useMemo } from 'react';
import { tva, type VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type BadgeContextValue = {
  action: NonNullable<VariantProps<typeof badgeStyle>['action']>;
  size: NonNullable<VariantProps<typeof badgeStyle>['size']>;
};

const BadgeContext = createContext<BadgeContextValue>({
  action: 'muted',
  size: 'md',
});

const badgeStyle = tva({
  base: 'inline-flex flex-row items-center rounded-sm disabled:opacity-50 px-2 py-1',
  variants: {
    action: {
      error: 'bg-background-error border-error-300',
      warning: 'bg-background-warning border-warning-300',
      success: 'bg-background-success border-success-300',
      info: 'bg-background-info border-info-300',
      muted: 'bg-background-muted border-background-300',
    },
    variant: {
      solid: '',
      outline: 'border',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
});

const badgeTextStyle = tva({
  base: 'text-typography-700 font-body font-normal tracking-normal uppercase',
  parentVariants: {
    action: {
      error: 'text-error-600',
      warning: 'text-warning-600',
      success: 'text-success-600',
      info: 'text-info-600',
      muted: 'text-background-800',
    },
    size: {
      sm: 'text-2xs',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  variants: {
    isTruncated: {
      true: 'truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const badgeIconStyle = tva({
  base: 'inline-flex fill-none',
  parentVariants: {
    action: {
      error: 'text-error-600',
      warning: 'text-warning-600',
      success: 'text-success-600',
      info: 'text-info-600',
      muted: 'text-background-800',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
    },
  },
});

type IBadgeProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof badgeStyle> & { className?: string };

function Badge({
  children,
  action = 'muted',
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: IBadgeProps) {
  const contextValue = useMemo(() => ({ action, size }), [action, size]);

  return (
    <BadgeContext.Provider value={contextValue}>
      <div
        className={badgeStyle({ action, variant, size, class: className })}
        {...props}
      >
        {children}
      </div>
    </BadgeContext.Provider>
  );
}

type IBadgeTextProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeTextStyle> & { className?: string };

const BadgeText = React.forwardRef<HTMLSpanElement, IBadgeTextProps>(
  ({ className, size, ...props }, ref) => {
    const { size: parentSize, action: parentAction } =
      useContext(BadgeContext);

    return (
      <span
        ref={ref}
        className={badgeTextStyle({
          parentVariants: {
            size: size ?? parentSize,
            action: parentAction,
          },
          size,
          class: className,
        })}
        {...props}
      />
    );
  }
);

type IBadgeIconProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof badgeIconStyle> & {
    as?: React.ElementType;
    className?: string;
  };

const BadgeIcon = React.forwardRef<HTMLElement, IBadgeIconProps>(
  ({ as: IconComponent = 'span', className, size, ...props }, ref) => {
    const { size: parentSize, action: parentAction } =
      useContext(BadgeContext);

    return (
      <IconComponent
        ref={ref}
        className={badgeIconStyle({
          parentVariants: {
            size: size ?? parentSize,
            action: parentAction,
          },
          size,
          class: className,
        })}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
BadgeText.displayName = 'BadgeText';
BadgeIcon.displayName = 'BadgeIcon';

export { Badge, BadgeIcon, BadgeText };
