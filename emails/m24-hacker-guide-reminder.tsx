import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { anchor, textH1, textH2, textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Heading, Link, Section, Text } from '@react-email/components';
import { QUESTIONS_EMAIL } from '../utils/constants';
import { CTAButton } from '../components/m24/CTAButton';

const SLACK_INVITE_LINK =
  'https://join.slack.com/t/mhacks2024/shared_invite/zt-2r9ghus3m-dkn0m5wU3xH8Kenx~sapEg';
const HACKER_GUIDE_LINK =
  'https://docs.google.com/document/d/1kpIZGN8-MbPODH5jmi3DoAfl-k6LWUxheGCQoeMBP54/edit#heading=h.wkj5s1b1t6z9';

function HackerGuideReminderEmail() {
  return (
    <EmailProvider preview='Action required: join MHacks 2024 Slack'>
      <Header
        heading='Reminder: next steps for competing in MHacks 2024'
        actionRequired={true}
      />

      <Text style={textP}>
        Hello hackers! MHacks 2024 is here. These are the steps you need to take
        to get ready for the event this weekend.
      </Text>

      <HDivider />

      <Section>
        <Heading style={textH2}>Slack 💬</Heading>

        <Text style={textP}>
          This is a Slack workspace for the MHacks 2024 event. This is where all
          announcements and communication with mentors, sponsors, and other
          hackers will happen before and throughout the event. Please join the
          Slack workspace using the link below <b>before this weekend</b>.
        </Text>

        <CTAButton href={SLACK_INVITE_LINK}>JOIN EVENT SLACK</CTAButton>
      </Section>

      <HDivider />

      <Section>
        <Heading style={textH2}>Hacker guide 📕</Heading>

        <Text style={textP}>
          This document is your go-to guide for everything you need to know
          about MHacks 2024. It includes event schedule, venue information,
          maps, sleeping information, team formation, workshops, tracks, and
          more.
        </Text>

        <CTAButton href={HACKER_GUIDE_LINK}>HACKER GUIDE</CTAButton>
      </Section>

      <HDivider />

      <Text style={textP}>
        If you have any questions please ask them in <b>#help-desk</b> on the
        MHacks 2024 event slack. . We’re super excited for this weekend and
        can’t wait to see you all!
      </Text>

      <Text style={textP}>– MHacks Team</Text>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default HackerGuideReminderEmail;
