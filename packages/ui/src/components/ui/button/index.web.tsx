'use client';
import React, { createContext, useContext } from 'react';
import { tva, type VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type ButtonContextValue = {
  action: NonNullable<VariantProps<typeof buttonStyle>['action']>;
  size: NonNullable<VariantProps<typeof buttonStyle>['size']>;
  variant: NonNullable<VariantProps<typeof buttonStyle>['variant']>;
};

const ButtonContext = createContext<ButtonContextValue>({
  action: 'primary',
  size: 'md',
  variant: 'solid',
});

const buttonStyle = tva({
  base: 'group/button inline-flex rounded bg-primary-500 flex-row items-center justify-center border border-transparent data-[disabled=true]:opacity-40 gap-2 focus-visible:outline-none focus-visible:ring-2',
  variants: {
    action: {
      primary:
        'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-300 hover:border-primary-400 active:border-primary-500 focus-visible:ring-indicator-info',
      secondary:
        'bg-secondary-500 border-secondary-300 hover:bg-secondary-600 hover:border-secondary-400 active:bg-secondary-700 active:border-secondary-700 focus-visible:ring-indicator-info',
      positive:
        'bg-success-500 border-success-300 hover:bg-success-600 hover:border-success-400 active:bg-success-700 active:border-success-500 focus-visible:ring-indicator-info',
      negative:
        'bg-error-500 border-error-300 hover:bg-error-600 hover:border-error-400 active:bg-error-700 active:border-error-500 focus-visible:ring-indicator-info',
      default: 'bg-transparent hover:bg-background-50 active:bg-transparent',
    },
    variant: {
      link: 'px-0 bg-transparent border-transparent hover:bg-transparent active:bg-transparent',
      outline: 'bg-transparent border hover:bg-background-50 active:bg-transparent',
      solid: '',
    },
    size: {
      xs: 'px-3.5 h-8',
      sm: 'px-4 h-9',
      md: 'px-5 h-10',
      lg: 'px-6 h-11',
      xl: 'px-7 h-12',
    },
  },
});

const buttonTextStyle = tva({
  base: 'text-typography-0 font-semibold select-none',
  parentVariants: {
    action: {
      primary: 'text-primary-600 hover:text-primary-600 active:text-primary-700',
      secondary:
        'text-typography-500 hover:text-typography-600 active:text-typography-700',
      positive: 'text-success-600 hover:text-success-600 active:text-success-700',
      negative: 'text-error-600 hover:text-error-600 active:text-error-700',
      default: 'text-typography-900',
    },
    variant: {
      link: 'group-hover/button:underline group-active/button:underline',
      outline: '',
      solid: 'text-typography-0 hover:text-typography-0 active:text-typography-0',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'secondary',
      class: 'text-typography-800 hover:text-typography-800 active:text-typography-800',
    },
    {
      variant: 'outline',
      action: 'primary',
      class: 'text-primary-500 hover:text-primary-500 active:text-primary-500',
    },
    {
      variant: 'outline',
      action: 'secondary',
      class:
        'text-typography-500 hover:text-primary-600 active:text-typography-700',
    },
    {
      variant: 'outline',
      action: 'positive',
      class: 'text-primary-500 hover:text-primary-500 active:text-primary-500',
    },
    {
      variant: 'outline',
      action: 'negative',
      class: 'text-primary-500 hover:text-primary-500 active:text-primary-500',
    },
  ],
});

const buttonIconStyle = tva({
  base: 'inline-flex fill-none',
  parentVariants: {
    variant: {
      link: 'group-hover/button:underline group-active/button:underline',
      outline: '',
      solid: 'text-typography-0 hover:text-typography-0 active:text-typography-0',
    },
    size: {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-[18px] w-[18px]',
      xl: 'h-5 w-5',
    },
    action: {
      primary: 'text-primary-600 hover:text-primary-600 active:text-primary-700',
      secondary:
        'text-typography-500 hover:text-typography-600 active:text-typography-700',
      positive: 'text-success-600 hover:text-success-600 active:text-success-700',
      negative: 'text-error-600 hover:text-error-600 active:text-error-700',
      default: 'text-typography-900',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'secondary',
      class: 'text-typography-800 hover:text-typography-800 active:text-typography-800',
    },
  ],
});

const buttonGroupStyle = tva({
  base: 'flex',
  variants: {
    space: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    isAttached: {
      true: 'gap-0',
    },
    flexDirection: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
  },
});

type IButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'size'
> &
  VariantProps<typeof buttonStyle> & {
    className?: string;
    onPress?: React.MouseEventHandler<HTMLButtonElement>;
  };

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      action = 'primary',
      type = 'button',
      onClick,
      onPress,
      ...props
    },
    ref
  ) => {
    const context = { action, size, variant };
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event);

      if (!event.defaultPrevented) {
        onPress?.(event);
      }
    };

    return (
      <ButtonContext.Provider value={context}>
        <button
          ref={ref}
          type={type}
          onClick={handleClick}
          {...props}
          className={buttonStyle({ variant, size, action, class: className })}
        />
      </ButtonContext.Provider>
    );
  }
);

type IButtonTextProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof buttonTextStyle> & { className?: string };

const ButtonText = React.forwardRef<HTMLSpanElement, IButtonTextProps>(
  ({ className, variant, size, action, ...props }, ref) => {
    const parent = useContext(ButtonContext);

    return (
      <span
        ref={ref}
        {...props}
        className={buttonTextStyle({
          parentVariants: {
            variant: variant ?? parent.variant,
            size: size ?? parent.size,
            action: action ?? parent.action,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);

const ButtonSpinner = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  function ButtonSpinner(props, ref) {
    return <span aria-hidden="true" ref={ref} {...props} />;
  }
);

type IButtonIcon = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof buttonIconStyle> & {
    as?: React.ElementType;
    className?: string | undefined;
  };

const ButtonIcon = React.forwardRef<HTMLElement, IButtonIcon>(
  ({ as: IconComponent = 'span', className, size, ...props }, ref) => {
    const parent = useContext(ButtonContext);

    return (
      <IconComponent
        ref={ref}
        {...props}
        className={buttonIconStyle({
          parentVariants: {
            size: size ?? parent.size,
            variant: parent.variant,
            action: parent.action,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

type IButtonGroupProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof buttonGroupStyle>;

const ButtonGroup = React.forwardRef<HTMLDivElement, IButtonGroupProps>(
  (
    {
      className,
      space = 'md',
      isAttached = false,
      flexDirection = 'column',
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={buttonGroupStyle({
          class: className,
          space,
          isAttached,
          flexDirection,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';
ButtonGroup.displayName = 'ButtonGroup';

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
