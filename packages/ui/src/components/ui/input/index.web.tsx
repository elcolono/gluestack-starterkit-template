'use client';
import React, { createContext, useContext } from 'react';
import { tva, type VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type InputContextValue = {
  size: NonNullable<VariantProps<typeof inputStyle>['size']>;
  variant: NonNullable<VariantProps<typeof inputStyle>['variant']>;
};

const InputContext = createContext<InputContextValue>({
  size: 'md',
  variant: 'outline',
});

const inputStyle = tva({
  base: 'border-background-300 flex overflow-hidden content-center hover:border-outline-400 focus-within:border-primary-700 disabled:opacity-40 items-center',
  variants: {
    size: {
      xl: 'h-12',
      lg: 'h-11',
      md: 'h-10',
      sm: 'h-9',
    },
    variant: {
      underlined:
        'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error-700',
      outline:
        'rounded border data-[invalid=true]:border-error-700 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indicator-primary',
      rounded:
        'rounded-full border data-[invalid=true]:border-error-700 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indicator-primary',
    },
  },
});

const inputIconStyle = tva({
  base: 'inline-flex justify-center items-center text-typography-400 fill-none',
  parentVariants: {
    size: {
      '2xs': 'h-3 w-3',
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
});

const inputSlotStyle = tva({
  base: 'inline-flex justify-center items-center disabled:cursor-not-allowed',
});

const inputFieldStyle = tva({
  base: 'flex-1 text-typography-900 py-0 px-3 placeholder:text-typography-500 h-full cursor-text disabled:cursor-not-allowed bg-transparent border-0 outline-none',
  parentVariants: {
    variant: {
      underlined: 'px-0',
      outline: '',
      rounded: 'px-4',
    },
    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
});

type IInputProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'size'> &
  VariantProps<typeof inputStyle> & { className?: string };

const Input = React.forwardRef<HTMLDivElement, IInputProps>(
  ({ className, variant = 'outline', size = 'md', ...props }, ref) => {
    const context = { variant, size };

    return (
      <InputContext.Provider value={context}>
        <div
          ref={ref}
          {...props}
          className={inputStyle({ variant, size, class: className })}
        />
      </InputContext.Provider>
    );
  }
);

type IInputIconProps = React.ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof inputIconStyle> & {
    as?: React.ElementType;
    className?: string;
  };

const InputIcon = React.forwardRef<HTMLElement, IInputIconProps>(
  ({ as: IconComponent = 'span', className, size, ...props }, ref) => {
    const { size: parentSize } = useContext(InputContext);

    return (
      <IconComponent
        ref={ref}
        {...props}
        className={inputIconStyle({
          parentVariants: { size: size ?? parentSize },
          class: className,
        })}
      />
    );
  }
);

type IInputSlotProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof inputSlotStyle> & { className?: string };

const InputSlot = React.forwardRef<HTMLButtonElement, IInputSlotProps>(
  ({ className, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={inputSlotStyle({ class: className })}
      />
    );
  }
);

type IInputFieldProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'size'
> &
  VariantProps<typeof inputFieldStyle> & { className?: string };

const InputField = React.forwardRef<HTMLInputElement, IInputFieldProps>(
  ({ className, size, ...props }, ref) => {
    const { variant: parentVariant, size: parentSize } =
      useContext(InputContext);

    return (
      <input
        ref={ref}
        {...props}
        className={inputFieldStyle({
          parentVariants: {
            variant: parentVariant,
            size: size ?? parentSize,
          },
          class: className,
        })}
      />
    );
  }
);

Input.displayName = 'Input';
InputIcon.displayName = 'InputIcon';
InputSlot.displayName = 'InputSlot';
InputField.displayName = 'InputField';

export { Input, InputField, InputIcon, InputSlot };
