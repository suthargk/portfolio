import React from "react";
import LegalLayout from "./LegalLayout";
import { EXTENSION_URL } from "../constants";

const TermsOfService = () => {
  return (
    <LegalLayout title="Terms of Service" updatedAt="July 12, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the Calendario
        Chrome extension ("Calendario", "the extension"), made available by
        Gaurav Suthar via the{" "}
        <a href={EXTENSION_URL} target="_blank" rel="noreferrer">
          Chrome Web Store
        </a>
        . By installing or using Calendario, you agree to these Terms. If you
        do not agree, do not install or use the extension.
      </p>

      <h2>What Calendario is</h2>
      <p>
        Calendario is a free browser extension that lets you view and manage
        Google Calendar and/or Microsoft 365 (Outlook) events from a single
        toolbar popup. It connects directly to Google's and Microsoft's own
        APIs using the sign-in credentials you provide; it is not affiliated
        with, endorsed by, or sponsored by Google LLC or Microsoft
        Corporation.
      </p>

      <h2>Eligibility and accounts</h2>
      <p>
        You need a Google Account and/or Microsoft account to connect a
        calendar. Your use of those accounts remains subject to Google's and
        Microsoft's own terms of service, independent of these Terms. You are
        responsible for the accuracy of the accounts you connect and for
        keeping your device and browser secure.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use Calendario for any unlawful purpose or in violation of Google's
          or Microsoft's API terms of service;
        </li>
        <li>
          Attempt to reverse engineer, decompile, or interfere with the
          extension beyond what applicable law expressly permits;
        </li>
        <li>
          Use Calendario to access, scrape, or interfere with calendar
          accounts you are not authorized to access.
        </li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        Calendario relies on Google and Microsoft APIs to function. We are
        not responsible for outages, rate limits, API changes, or data
        inaccuracies originating from those providers, or for the
        availability of the Chrome Web Store itself. Your data handling by
        those providers is described in their own privacy policies, and by
        Calendario in our{" "}
        <a href="/calendario/privacy">Privacy Policy</a>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Calendario's code, design, and branding are owned by Gaurav Suthar.
        These Terms do not grant you any rights to Calendario's trademarks,
        logos, or source code beyond what is needed to install and use the
        extension for its intended purpose.
      </p>

      <h2>No warranty</h2>
      <p>
        Calendario is provided "as is" and "as available," without
        warranties of any kind, express or implied, including fitness for a
        particular purpose, accuracy, or uninterrupted availability. We do
        not guarantee that the extension will be error-free or that calendar
        data displayed will always be fully up to date.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Gaurav Suthar shall not be
        liable for any indirect, incidental, special, or consequential
        damages — including missed meetings, lost data, or lost
        opportunities — arising from your use of, or inability to use,
        Calendario.
      </p>

      <h2>Termination</h2>
      <p>
        You may stop using Calendario at any time by disconnecting your
        accounts and/or uninstalling the extension from your browser. We may
        discontinue or modify Calendario at any time, including removing it
        from the Chrome Web Store, without prior notice.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The "Last updated" date
        above reflects the most recent revision. Continued use of Calendario
        after a change constitutes acceptance of the revised Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to its
        conflict of law principles. Any disputes arising from these Terms or
        your use of Calendario will be subject to the exclusive jurisdiction
        of the courts of India.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:gaurav.suthar161@gmail.com">
          gaurav.suthar161@gmail.com
        </a>
        .
      </p>
    </LegalLayout>
  );
};

export default TermsOfService;
