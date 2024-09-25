import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { anchor, textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Link, Text } from '@react-email/components';
import { QUESTIONS_EMAIL } from '../utils/constants';

const PREVIEW_LINE =
  'We regret to inform you that we were not able to offer you a spot to participate in MHacks 2024.';

function RejectionEmail() {
  return (
    <EmailProvider preview={PREVIEW_LINE}>
      <Header
        heading='MHacks 2024 application decision'
        actionRequired={false}
      />

      <Text style={textP}>{PREVIEW_LINE}</Text>

      <Text style={textP}>
        We had to make some tough decisions this year, and unfortunately, we
        were not able to accommodate all applicants. We appreciate your interest
        in MHacks and hope you will consider applying again in the future. If
        you have any questions, please feel free to reach out to us at{' '}
        <Link style={anchor} href={`mailto:${QUESTIONS_EMAIL}`}>
          {QUESTIONS_EMAIL}
        </Link>
        .
      </Text>

      <Text style={textP}>– MHacks Team</Text>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default RejectionEmail;
