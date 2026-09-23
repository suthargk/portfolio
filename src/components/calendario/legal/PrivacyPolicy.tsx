import LegalLayout from "./LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="September 23, 2026">
      <p>
        Calendario (&quot;the extension&quot;, &quot;we&quot;, &quot;us&quot;) is a Chrome extension built
        and operated by Gaurav Suthar. This policy explains what data
        Calendario accesses, how it is used, and the choices you have. If you
        have questions, contact{" "}
        <a href="mailto:gaurav.suthar161@gmail.com">
          gaurav.suthar161@gmail.com
        </a>
        .
      </p>

      <h2>How Calendario works</h2>
      <p>
        Calendario connects directly to Google Calendar and/or Microsoft 365
        (Outlook) using each provider&apos;s official APIs and your explicit
        sign-in. There is no intermediary server sitting between your browser
        and Google or Microsoft — your calendar data is requested by the
        extension running in your browser and displayed to you, and nothing
        else in between reads or stores it.
      </p>

      <h2>What we access</h2>
      <ul>
        <li>
          <strong>Calendar data</strong> — event titles, times, locations,
          descriptions, attendees, RSVP status, and attachments for the
          calendars you choose to connect and sync.
        </li>
        <li>
          <strong>Account identity</strong> — your name, email address, and
          profile picture, as provided by Google/Microsoft sign-in, used only
          to show which account is connected.
        </li>
        <li>
          <strong>Google contacts (optional)</strong> — names, email
          addresses, and profile photos from your saved contacts and your
          &quot;other contacts&quot;. Only accessed if you choose to allow it
          when adding guests to an event. See{" "}
          <a href="#google-contacts">Google contacts</a> below.
        </li>
        <li>
          <strong>Event reminders</strong> — the title, start time, reminder
          time and link of your upcoming events, kept on your device to show
          reminder notifications. See <a href="#event-reminders">Event
          reminders</a> below.
        </li>
        <li>
          <strong>Extension preferences</strong> — theme, language, time
          format, and which calendars are enabled.
        </li>
      </ul>

      <h2>Where your data is stored</h2>
      <p>
        Your OAuth access tokens and preferences are stored locally in your
        browser (via <code>chrome.storage</code>) on your device. Calendar
        data itself is fetched on demand from Google/Microsoft and rendered
        in the popup — Calendario does not operate a backend database, and we
        do not upload, copy, or retain your calendar content on any server we
        control.
      </p>

      <h2 id="google-contacts">Google contacts (optional)</h2>
      <p>
        If you choose to allow it when adding guests to an event, Calendario
        reads names, email addresses and profile photos from your Google
        contacts and your &quot;other contacts&quot; (people you have emailed).
        This is used only to suggest people to invite as you type. These
        results are requested directly from Google by the extension on your
        device, are kept in memory only while the extension is open, and are
        never stored, sent to any server of ours, or shared with anyone. The
        only contact information that leaves your device is the email address
        and name of a person you select, which is sent to Google Calendar as
        a guest on the event you are creating. You can revoke access at any
        time at{" "}
        <a
          href="https://myaccount.google.com/permissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          myaccount.google.com/permissions
        </a>
        .
      </p>

      <h2 id="event-reminders">Event reminders</h2>
      <p>
        To show reminder notifications, Calendario keeps a short-lived list
        of your upcoming reminders on your own device: the event title,
        start time, reminder time and a link to the event. It is used only to
        show the reminder (a notification, a small card on the page you are
        viewing, and a short sound) and is removed within about an hour after
        the event starts, when you sign out, or when you turn reminder
        notifications off in Settings. It is stored locally in your browser
        (<code>chrome.storage.local</code>), is never sent to us or to anyone
        else, and is not used for any other purpose. You can turn reminder
        notifications off, or have them close automatically after a time you
        choose, at any point in Settings.
      </p>

      <h2>Location suggestions</h2>
      <p>
        When you type in an event&apos;s location field, the text you type may be
        sent to Google Places to provide address suggestions. This only
        happens when the feature is enabled, and nothing else from your
        calendar is included.
      </p>

      <h2>Analytics</h2>
      <p>
        The Calendario extension itself contains no analytics or tracking
        code. We do see aggregate install and rating statistics that the
        Chrome Web Store provides to all developers, and privacy-friendly
        page-view analytics (Vercel Analytics) on this website
        (gauravsuthar.com); neither includes the content of your calendar
        events, attendee information, or account credentials.
      </p>

      <h2>How your data is protected</h2>
      <p>
        All requests to Google, Microsoft and Google Places APIs are made
        over HTTPS/TLS directly from your browser; Calendario has no backend
        server that data passes through or is stored on. Your Google and
        Microsoft access tokens are kept in <code>chrome.storage.local</code>,
        which is sandboxed to this extension and is not readable by websites
        or other extensions. Contact search results (name, email, photo) are
        held in memory only for the lifetime of the open popup and are never
        written to disk. Each token is scoped to the minimum permissions you
        granted and can be revoked at any time from{" "}
        <a
          href="https://myaccount.google.com/permissions"
          target="_blank"
          rel="noopener noreferrer"
        >
          myaccount.google.com/permissions
        </a>{" "}
        (Google) or your Microsoft account&apos;s app permissions page.
        Uninstalling the extension removes all locally stored tokens and
        cached data.
      </p>

      <h2>Sharing and third parties</h2>
      <p>
        We do not sell your data or share it with advertisers. Data only
        flows to:
      </p>
      <ul>
        <li>
          Google (Google Calendar API, Google People API, Google Places,
          Google sign-in)
        </li>
        <li>Microsoft (Microsoft Graph API, Microsoft 365 sign-in)</li>
      </ul>
      <p>
        Each provider&apos;s use of data is governed by its own privacy policy —
        Google&apos;s and Microsoft&apos;s — in addition to this one.
      </p>

      <h2>Google API Services User Data Policy</h2>
      <p>
        Calendario&apos;s use and transfer of information received from Google
        APIs to any other app will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <h2>Your choices and controls</h2>
      <ul>
        <li>
          Disconnect a Google or Microsoft account at any time from
          Calendario&apos;s settings — this revokes the extension&apos;s access token.
        </li>
        <li>
          Revoke Calendario&apos;s access directly from your Google Account or
          Microsoft Account security settings at any time.
        </li>
        <li>
          Uninstalling the extension removes all locally stored tokens and
          preferences from your browser.
        </li>
      </ul>

      <h2>Data retention</h2>
      <p>
        Locally stored tokens and preferences persist only as long as the
        extension remains installed and connected. Disconnecting an account
        or uninstalling the extension deletes this local data immediately;
        nothing is retained on our side because nothing is stored there in
        the first place.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        Calendario is not directed at children under 13, and we do not
        knowingly collect data from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the &quot;Last updated&quot; date above will be
        revised. Material changes will be reflected here before they take
        effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data can be sent to{" "}
        <a href="mailto:gaurav.suthar161@gmail.com">
          gaurav.suthar161@gmail.com
        </a>
        .
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
