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
  Markdown
} from "@react-email/components";

import * as React from "react";

const BACKGROUND_COLOR = '#f4f2f5';
const TAGLINE = 'Optional: register interest in the Telora Founder’s Track'

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>{TAGLINE}</Preview>
    <Body style={main}>
      <GmailWrapper>
        <Container style={container}>
          <Section>
            <Img
              src='https://ci3.googleusercontent.com/meips/ADKq_Nan79gAwLvKya1_2ke3631fTfT87tCSI8wbjxK2uGKaNpvFXiHzMIWLJGRE3-vauBWott7yLA-lsyqXP-IZtkKAxMWUAWaVyFYlp7NU5AO8L-7hvvG2u1wbQE2uHuCp5lSTr6bc-w=s0-d-e1-ft#https://drive.google.com/uc?export=download&id=1zhwEng3CPEFuADCxDMcicDkYES_AyMv8'
              width="80"
              height="80"
              alt="MHacks logo"
              style={roundedM}
            />

            {/* <Text style={eyebrow}>ACTION NOT REQUIRED</Text> */}
            <Text style={h1}>
              {TAGLINE}
            </Text>

            <Text style={paragraph}>This year at MHacks 2024, we have a special ”track” called the Founder's Track. We're collaborating with <b>Telora, an early stage startup fellowship that funds ambitious college students</b> to work on their startup ideas.</Text>

            <Text style={paragraph}>If you opt in, you won’t be eligible for prizes from other tracks or sponsors, so this track isn’t for most hackers. But, <b>if you’re currently starting a startup or working on a project that could turn into one</b>, this could be for you!</Text>

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
            <Button style={button} href='https://www.notion.so/MHacks-2024-x-Telora-Founder-s-Track-10624ca0c81b80089f5ae26aad8aa071?pvs=4'>
              Interest form & FAQ
            </Button>

            <Text style={paragraph}>If you have any questions, please reach out to <Link style={anchor} href="mailto:founders-track@mhacks.org">founders-track@mhacks.org</Link>.</Text>

            <Text style={paragraph}>— The MHacks team</Text>

            <Hr style={hr} />

            <Text style={footer}>
              MHacks, <Link style={anchor} href="https://www.mhacks.org">www.mhacks.org</Link>
            </Text>
          </Section>
        </Container>
      </GmailWrapper>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;

/**
 * A wrapper to make copy-pasting the email content into gmail include the background color of the body.
 * 
 * Copying the email from localhost to gmail involves viewing the email, pressing `cmd + a` to select all, and then pasting it into the gmail compose window.
 * Without this wrapper, the background color isn't copied over.
 * @param children takes in the email content `Container`
 * @returns 
 */
function GmailWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <table width='100%' style={{ background: BACKGROUND_COLOR }}>
      <tr>
        <td width='100%' height='100%'>
          {children}
        </td>
      </tr>
    </table>
  );
}

const main = {
  backgroundColor: BACKGROUND_COLOR,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  lineHeight: '24px'
};

const unused = {};

const roundedS = {
  borderRadius: "4px"
};

const roundedM = {
  borderRadius: "8px"
};

const roundedL = {
  borderRadius: "16px"
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #EAEBED",
  margin: "24px auto",
  padding: "32px",
  marginBottom: "64px",
  ...roundedL,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "32px 0",
};

const paragraph = {
  color: "#202020",
  margin: "24px 0",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const h1 = {
  color: "#202020",
  margin: "32px 0",
  fontSize: "24px",
  fontWeight: "bold",
};

const h2 = {
  color: "#202020",
  margin: "24px 0",
  fontSize: "20px",
  fontWeight: "bold",
};

const eyebrow = {
  color: "#808080",
  margin: "16px 0 0 0",
  fontSize: "16px",
  fontWeight: "bold",
};

const anchor = {
  color: "#580C88",
};

const sponsorAnchor = {
  ...anchor,
  textDecoration: "underline",
};

const button = {
  backgroundColor: "transparent",
  border: "2px solid #580C88",
  ...roundedS,
  color: "#580C88",
  fontSize: "20px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "20px 0px",
};

const footer = {
  color: "#808080",
  fontSize: "12px",
  lineHeight: "16px",
};
