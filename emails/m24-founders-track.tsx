import { Hr, Link, Section, Text, Markdown } from '@react-email/components';
import * as React from 'react';

import Header from '../components/m24/Header';
import { CTAButton } from '../components/m24/CTAButton';
import { EmailProvider } from '../components/utils/EmailProvider';

const TAGLINE = 'Optional: register interest in the Telora Founder’s Track';

export const StripeWelcomeEmail = () => (
  <EmailProvider preview={TAGLINE}>
    <Section>
      <Header heading={TAGLINE} actionRequired={false} />

      <Text style={paragraph}>
        This year at MHacks 2024, we have a special ”track” called the Founder's
        Track. We're collaborating with{' '}
        <b>
          Telora, an early stage startup fellowship that funds ambitious college
          students
        </b>{' '}
        to work on their startup ideas.
      </Text>

      <Text style={paragraph}>
        If you opt in, you won’t be eligible for prizes from other tracks or
        sponsors, so this track isn’t for most hackers. But,{' '}
        <b>
          if you’re currently starting a startup or working on a project that
          could turn into one
        </b>
        , this could be for you!
      </Text>

      <Markdown>
        {`> Are you thinking of starting a startup? Have you already started it? Then you’re invited to the **Telora Founder Track** at **MHacks 2024**.
            \\
            \\
            During this weekend-long track co-hosted by MHacks and [Telora](http://telora.com/), you'll meet potential cofounders, learn if your startup idea is promising, and get actionable advice from successful founders backed by YC and Peter Thiel's Founders Fund.
            \\
            \\
            Up to 3 teams will be **guaranteed finalist slots for the $40,000 Telora Fellowship**. Since more people may want to participate than we have room for, please fill out [this short form](https://forms.gle/tMSdzc8AdihDLKgb8). We'll notify you if you've been selected before MHacks 2024 with additional details.`}
      </Markdown>
    </Section>

    <Hr style={hr} />

    <Section>
      <CTAButton
        variant='outline'
        href='https://www.notion.so/MHacks-2024-x-Telora-Founder-s-Track-10624ca0c81b80089f5ae26aad8aa071?pvs=4'
      >
        Interest form & FAQ
      </CTAButton>

      <Text style={paragraph}>
        If you have any questions, please reach out to{' '}
        <Link style={anchor} href='mailto:founders-track@mhacks.org'>
          founders-track@mhacks.org
        </Link>
        .
      </Text>

      <Text style={paragraph}>— The MHacks team</Text>

      <Hr style={hr} />

      <Text style={footer}>
        MHacks,{' '}
        <Link style={anchor} href='https://www.mhacks.org'>
          www.mhacks.org
        </Link>
      </Text>
    </Section>
  </EmailProvider>
);

export default StripeWelcomeEmail;

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const paragraph = {
  color: '#202020',
  margin: '24px 0',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#580C88',
};

const footer = {
  color: '#808080',
  fontSize: '12px',
  lineHeight: '16px',
};
