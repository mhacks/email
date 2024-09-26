import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import { Text } from '@react-email/components';

const PREVIEW_LINE = 'We’d like to offer you travel reimbursement!'; // TODO: replace me

function TravelReimbursementAcceptanceEmail() {
  return (
    <EmailProvider preview={PREVIEW_LINE}>
      <Header
        heading='Welcome to MHacks emails!' // TODO: replace me
        actionRequired={false}
      />

      <Text style={textP}>{PREVIEW_LINE}</Text>

      <Text style={textP}>– MHacks Team</Text>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default TravelReimbursementAcceptanceEmail;
