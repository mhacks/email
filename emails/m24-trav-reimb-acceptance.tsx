import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { anchor, textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Link, Text } from '@react-email/components';
import { CTAButton } from '../components/m24/CTAButton';
import { QUESTIONS_EMAIL } from '../utils/constants';

const PREVIEW_LINE = 'Your travel reimbursement offer';
const REGISTRATION_LINK =
  'https://www.notion.so/MHacks-2024-Travel-Reimbursement-Policy-10c24ca0c81b802e8c85dd2e31c9c38f?pvs=4';

function TravelReimbursementAcceptanceEmail() {
  return (
    <EmailProvider preview={PREVIEW_LINE}>
      <Header
        heading='Your travel reimbursement offer'
        actionRequired={false}
      />

      <Text style={textP}>
        We’re pleased to offer you our travel reimbursement offer for MHacks
        2024. Please register and see the reimbursement policy.
      </Text>

      <Text style={textP}>
        If you have any questions, respond to this email or reach out to{' '}
        <Link style={anchor} href={`mailto:${QUESTIONS_EMAIL}`}>
          {QUESTIONS_EMAIL}
        </Link>
        .
      </Text>

      <Text style={textP}>– MHacks Team</Text>

      <CTAButton href={REGISTRATION_LINK}>DETAILS & REGISTRATION</CTAButton>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default TravelReimbursementAcceptanceEmail;
