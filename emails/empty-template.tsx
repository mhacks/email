import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Text } from '@react-email/components';

const PREVIEW_LINE = 'This is an empty email'; // TODO: replace me

// TODO: rename me
function EmptyTemplate() {
  return (
    <EmailProvider preview={PREVIEW_LINE}>
      <Header
        heading='Welcome to MHacks emails!' // TODO: replace me
        actionRequired={false}
      />

      <Text style={customStyle}>{PREVIEW_LINE}</Text>

      <Text style={textP}>– MHacks Team</Text>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default EmptyTemplate;

// if needed, overwrite theme styles with custom styles for your component
// TODO: delete me
const customStyle = {
  ...textP,
  color: theme.colors.purple.dark,
};
