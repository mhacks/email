import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Text } from '@react-email/components';
import { CTAButton } from '../components/m24/CTAButton';

const NEW_SLACK_LINK =
  'https://join.slack.com/t/mhacks2024/shared_invite/zt-2rem9ziyd-vTuspbZZhUowt59Zcw0boQ';

function SlackLinkFixEmail() {
  return (
    <EmailProvider preview='Updated Slack join link'>
      <Header
        heading='Updated event Slack join link 🔗'
        actionRequired={false}
      />

      <Text style={textP}>
        Some of you have brought to our attention that our join link for the
        event Slack has expired. <b>Please use the new link below!</b>
      </Text>

      <Text style={textP}>– MHacks Team</Text>

      <CTAButton href={NEW_SLACK_LINK}>JOIN EVENT SLACK</CTAButton>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default SlackLinkFixEmail;
