import * as React from 'react';
import { Hr } from '@react-email/components';

import { theme } from '../../styles/mhacks-2024';

export function HDivider() {
  return <Hr style={hr} />;
}

const hr = {
  borderColor: theme.colors.purple.mediumLight,
  margin: `${theme.spacing.l} 0`,
};
