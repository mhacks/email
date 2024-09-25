import * as React from 'react';
import { Button } from '@react-email/components';

import { theme, roundedS } from '../../styles/mhacks-2024';

export function CTAButton({
  children,
  variant = 'filled',
  href,
}: {
  href: string;
  variant?: 'filled' | 'outline';
  children: React.ReactNode;
}) {
  const variantStyles =
    variant === 'filled'
      ? {
          backgroundColor: theme.colors.purple.dark,
          color: theme.colors.white,
        }
      : {
          backgroundColor: theme.colors.transparent,
          color: theme.colors.purple.dark,
          border: `2px solid ${theme.colors.purple.dark}`,
        };

  return (
    <Button style={{ ...button, ...variantStyles }} href={href}>
      {children}
    </Button>
  );
}

const button = {
  ...roundedS,
  testValue: 'test',
  fontSize: theme.text.sizes.l,
  fontWeight: theme.text.weights.bold,
  textAlign: 'center' as const,
  width: '100%',
  padding: '20px 0px',
};
