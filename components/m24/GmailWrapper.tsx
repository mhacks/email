import * as React from 'react'

import { theme } from '../../styles/mhacks-2024'

/**
 * A wrapper to make copy-pasting the email content into gmail include the background color of the body.
 * 
 * Copying the email from localhost to gmail involves viewing the email, pressing `cmd + a` to select all, and then pasting it into the gmail compose window.
 * Without this wrapper, the background color isn't copied over.
 * @param children takes in the email content `Container`
 * @returns 
 */
export function GmailWrapper({ children }: { children: React.ReactNode; }) {
  return (
    <table width='100%' style={{ background: theme.colors.purple.light }}>
      <tr>
        <td width='100%' height='100%'>
          {children}
        </td>
      </tr>
    </table>
  );
}
