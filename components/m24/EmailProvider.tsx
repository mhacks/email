import * as React from 'react';
import { Body, Container, Html, Preview } from '@react-email/components';
import { GmailWrapper } from './GmailWrapper';

import { theme, roundedL } from '../../styles/mhacks-2024';

export function EmailProvider({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}) {
  return (
    <Html>
      <Preview>{preview}</Preview>
      <Body style={main}>
        <GmailWrapper>
          <Container style={container}>{children}</Container>
        </GmailWrapper>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: theme.colors.purple.light,
  fontFamily: theme.text.fontFamily,
  lineHeight: theme.text.lineHeights.m,
};

const container = {
  ...roundedL,
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.purple.mediumLight}`,
  margin: `${theme.spacing.l} auto`,
  padding: theme.spacing.l,
};
