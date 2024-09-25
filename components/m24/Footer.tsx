import * as React from 'react';
import { Text, Link } from '@react-email/components';
import { anchor, theme } from '../../styles/mhacks-2024';

export function Footer() {
  return (
    <Text style={footer}>
      MHacks,{' '}
      <Link style={link} href='https://www.mhacks.org'>
        www.mhacks.org
      </Link>
    </Text>
  );
}

const footer = {
  color: theme.colors.text.secondary,
  fontSize: theme.text.sizes.s,
};

const link = {
  color: theme.colors.purple.dark,
};
