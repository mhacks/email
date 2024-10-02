import React from 'react';
import { EmailProvider } from '../components/m24/EmailProvider';
import { SocialLinks } from '../components/SocialLinks';
import { Footer } from '../components/m24/Footer';
import Header from '../components/m24/Header';
import { roundedS, textH2, textP, theme } from '../styles/mhacks-2024';
import { HDivider } from '../components/m24/HDivider';
import {
  Column,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components';
import { CTAButton } from '../components/m24/CTAButton';

const PREVIEW_LINE =
  'Thank you for attending MHacks 2024 – event photos – feedback form'; // TODO: replace me

function HackerThankYouEmail() {
  return (
    <EmailProvider preview={PREVIEW_LINE}>
      <Header
        heading={
          <>
            Thank <i>you</i> for attending MHacks 2024!
          </>
        }
        actionRequired={false}
      >
        <Text style={textP}>This weekend was excellent</Text>

        <Img
          src='https://drive.google.com/uc?export=download&id=1HtqX9_CTbS4e5b_2dReaZzDpNq3mAE01'
          width='100%'
          alt='MHacks 2024'
          style={roundedS}
        />
      </Header>

      <HDivider />

      <Section>
        <Heading as={'h2'} style={textH2}>
          Event photo album
        </Heading>

        <Text style={textP}>This weekend was excellent</Text>

        <CTAButton href='//TODO: ' variant='outline'>
          View photo album
        </CTAButton>
      </Section>

      <HDivider />

      <Section>
        <Heading as={'h2'} style={textH2}>
          Feedback form
        </Heading>

        <Text style={textP}>This weekend was excellent</Text>

        <CTAButton href='//TODO: ' variant='outline'>
          Complete feedback form
        </CTAButton>
      </Section>

      <HDivider />

      <Section>
        <Text style={textP}>
          We hope you had an amazing time at MHacks 2024! We’re so grateful to
          have had you join us for the weekend.
        </Text>

        <Text style={textP}>– MHacks Team &lt;3</Text>

        <SocialLinks />
      </Section>

      <HDivider />

      <Footer />
    </EmailProvider>
  );
}

export default HackerThankYouEmail;
