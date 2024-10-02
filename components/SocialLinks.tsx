import * as React from 'react';
import { Column, Img, Link, Row } from '@react-email/components';

export function SocialLinks() {
  return (
    <Row>
      <Column width={56}>
        <Link href='https://x.com/mhacks'>
          <Img
            src='https://pnyvcrxvfwifocotrmvo.supabase.co/storage/v1/object/public/email-images/socials/x.png'
            alt='Instagram'
            width={48}
          />
        </Link>
      </Column>

      <Column width={56}>
        <Link href='https://www.linkedin.com/company/mhacks'>
          <Img
            src='https://pnyvcrxvfwifocotrmvo.supabase.co/storage/v1/object/public/email-images/socials/linkedIn.png'
            alt='Instagram'
            width={48}
          />
        </Link>
      </Column>

      <Column width={56}>
        <Link href='https://www.instagram.com/mhacks_/?hl=en'>
          <Img
            src='https://pnyvcrxvfwifocotrmvo.supabase.co/storage/v1/object/public/email-images/socials/insta.png'
            alt='Instagram'
            width={48}
          />
        </Link>
      </Column>

      <Column>
        <Link href='https://www.youtube.com/@MHacks'>
          <Img
            src='https://pnyvcrxvfwifocotrmvo.supabase.co/storage/v1/object/public/email-images/socials/youTube.png'
            alt='Instagram'
            width={48}
          />
        </Link>
      </Column>
    </Row>
  );
}
