import * as React from "react";
import {
  Img,
  Section,
  Text,
  Heading
} from '@react-email/components';

import {roundedM} from '../../styles/mhacks-2024'

export default function Header({  
  heading,
  actionRequired,
  children,
}: {
  heading: string;
  actionRequired: boolean,
  children?: React.ReactNode;
}) {
  return (
    <Section>
      <Img
        src='https://ci3.googleusercontent.com/meips/ADKq_Nan79gAwLvKya1_2ke3631fTfT87tCSI8wbjxK2uGKaNpvFXiHzMIWLJGRE3-vauBWott7yLA-lsyqXP-IZtkKAxMWUAWaVyFYlp7NU5AO8L-7hvvG2u1wbQE2uHuCp5lSTr6bc-w=s0-d-e1-ft#https://drive.google.com/uc?export=download&id=1zhwEng3CPEFuADCxDMcicDkYES_AyMv8'
        width='80'
        height='80'
        alt='MHacks logo'
        style={roundedM}
      />

      {actionRequired && <Text style={eyebrow}>ACTION REQUIRED</Text>}

      <Heading as={'h1'} style={{...h1,  marginTop: actionRequired ? '8px' : undefined}}>{heading}</Heading>

      {children}
    </Section>
  );
}

const h1 = {
  color: "#202020",
  margin: "32px 0",
  fontSize: "24px",
  fontWeight: "bold",
};

const eyebrow = {
  color: "#808080",
  margin: "16px 0 0 0",
  fontSize: "16px",
  fontWeight: "bold",
};
