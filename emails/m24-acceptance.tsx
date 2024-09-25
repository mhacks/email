import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

import { GmailWrapper } from '../components/utils/GmailWrapper';
import { theme, roundedS, roundedL } from '../styles/mhacks-2024';
import Header from '../components/m24/Header';
import { CTAButton } from '../components/m24/CTAButton';

const CONFIRMATION_URL = 'https://tally.so/r/3NYyNj';
const CONFIRM_TEXT =
  'We’re excited to have you at MHacks 2024! Confirm your spot by clicking the button below.';
const CONFIRM_CTA = 'CONFIRM YOUR SPOT';

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>{CONFIRM_TEXT}</Preview>
    <Body style={main}>
      <GmailWrapper>
        <Container style={container}>
          <Section>
            <Header
              heading="CONGRATS! You're in. 🎉"
              actionRequired={true}
            ></Header>

            <Text style={paragraph}>{CONFIRM_TEXT}</Text>

            <Img
              src='https://drive.google.com/uc?export=download&id=1HtqX9_CTbS4e5b_2dReaZzDpNq3mAE01'
              width='100%'
              alt='MHacks 2024'
              style={roundedS}
            />

            <br />

            <CTAButton href={CONFIRMATION_URL}>{CONFIRM_CTA}</CTAButton>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={h1}>What's in MHacks 2024?</Text>

            <Text style={paragraph}>
              We have a lot of exciting things planned this year, including:
            </Text>

            <Section>
              <Text style={h2}>Incredible Sponsors</Text>

              <Text style={paragraph}>
                At MHacks 2024 we’re proud to be working with some amazing
                companies. Hack for prizes and speak with representatives from:
              </Text>

              <Text style={paragraph}>
                <b>
                  <ul>
                    <li>
                      <Link style={sponsorAnchor} href='https://www.aptiv.com/'>
                        Aptiv
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.caterpillar.com/'
                      >
                        Caterpillar
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.intel.com/content/www/us/en/homepage.html'
                      >
                        Intel
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://www.uber.com/'>
                        Uber
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://freewili.com/'>
                        FreeWili
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://its.umich.edu/'>
                        University of Michigan Information Technology Services
                        (ITS)
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.deshaw.com/'
                      >
                        D.E. Shaw
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://www.warp.dev/'>
                        Warp
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://groq.com/'>
                        Groq
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.scm-lp.com/'
                      >
                        Stevens Capital
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.engin.umich.edu/'
                      >
                        University of Michigan College of Engineering
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://magicloops.dev/'
                      >
                        MagicLoops
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.boundaryml.com/'
                      >
                        BoundaryML
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://cartesia.ai/'>
                        Cartesia
                      </Link>
                    </li>
                    <li>
                      <Link style={sponsorAnchor} href='https://telora.com/'>
                        Telora Founder Fellowhip
                      </Link>
                    </li>
                  </ul>
                </b>
              </Text>
            </Section>

            <Section>
              <Text style={h2}>Tracks & prizes</Text>

              <Text style={paragraph}>
                In addition to our sponsored prizes, we have a number of tracks
                that you can participate in. These include:
              </Text>

              <Text style={paragraph}>
                <b>
                  <ul>
                    <li>Education</li>
                    <li>Interactive media & gaming</li>
                    <li>Health</li>
                    <li>Sustainability</li>
                    <li>Accessibility</li>
                    <li>Optimization</li>
                    <li>
                      <Link
                        style={sponsorAnchor}
                        href='https://www.notion.so/MHacks-2024-x-Telora-Founder-s-Track-10624ca0c81b80089f5ae26aad8aa071?pvs=4'
                      >
                        Founder’s Track (with Telora)
                      </Link>
                    </li>
                  </ul>
                </b>
              </Text>
            </Section>

            <Section>
              <Text style={h2}>Keynote speaker: Dug Song</Text>

              <Text style={paragraph}>
                Dug Song is the co-founder and former general manager of{' '}
                <b>
                  Duo Security, one of the fastest-growing cybersecurity
                  providers in the world
                </b>
                . Song is also the co-founder and president of The Song
                Foundation and a board member of the National Advisory Council
                on Innovation and Entrepreneurship.
              </Text>

              <Text style={paragraph}>
                In 2018, <b>Duo was acquired by Cisco for $2.35 billion</b>,
                making it the largest exit ever for a Michigan-based software
                company. Song is a renowned hacker and leading voice in the
                information security industry. He is often quoted on
                cybersecurity issues by international media and appears onstage
                at industry events around the world.
              </Text>

              <Text style={paragraph}>
                Dug will be giving a speech during the opening ceremony:{' '}
                <b>
                  A Unicorn's Life: how to change the world from your dorm room
                </b>
                .
              </Text>

              <Img
                src='https://drive.google.com/uc?export=download&id=1fAzq6FDT8UaMv1kCJv7ek9hWY5Hf2Ht7'
                width='100%'
                alt='Dug Song headshot'
                style={roundedS}
              />
            </Section>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={h1}>Logistics</Text>

            <Text style={paragraph}>
              MHacks 2024 is a 24-hour hackathon that will take place on{' '}
              <b>Saturday Sep 28th - Sunday Sep 29th</b>. The event will be held
              at the University of Michigan in Ann Arbor, MI.{' '}
              <b>Opening ceremony</b> will begin at{' '}
              <b>9:30 AM on Saturday morning</b>, and <b>closing ceremony</b>{' '}
              will end at <b>6 PM on Sunday</b>.
            </Text>

            <Text style={paragraph}>
              Keep an eye out for another email from us including a hacker
              handbook which will have details such as a full schedule, venue
              information, travel recommendations, prizes, and more. This will
              be coming within the next day.
            </Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Img
              src='https://drive.google.com/uc?export=download&id=1aaO2yTlDGF0SozIiBMakPUselucfdNh9'
              width='100%'
              alt='MHacks promo image'
              style={roundedS}
            />

            <Text style={paragraph}>
              If you have any questions please do not hesitate to reach out to{' '}
              <Link style={anchor} href='mailto:hackathon@mhacks.org'>
                hackathon@mhacks.org
              </Link>
              .
            </Text>

            <Text style={paragraph}>
              We hope you're excited for MHacks 2024 and we look forward to
              seeing you there!
            </Text>

            <Text style={paragraph}>— The MHacks team</Text>

            <CTAButton href={CONFIRMATION_URL}>{CONFIRM_CTA}</CTAButton>

            <Hr style={hr} />

            <Text style={footer}>
              MHacks,{' '}
              <Link style={anchor} href='https://www.mhacks.org'>
                www.mhacks.org
              </Link>
            </Text>
          </Section>
        </Container>
      </GmailWrapper>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: theme.colors.purple.light,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  lineHeight: '24px',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #EAEBED',
  margin: '24px auto',
  padding: '32px',
  marginBottom: '64px',
  ...roundedL,
};

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

const h1 = {
  color: '#202020',
  margin: '32px 0',
  fontSize: '24px',
  fontWeight: 'bold',
};

const h2 = {
  color: '#202020',
  margin: '24px 0',
  fontSize: '20px',
  fontWeight: 'bold',
};

const anchor = {
  color: '#580C88',
};

const sponsorAnchor = {
  ...anchor,
  textDecoration: 'underline',
};

const footer = {
  color: '#808080',
  fontSize: '12px',
  lineHeight: '16px',
};
