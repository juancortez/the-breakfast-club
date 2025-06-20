import { AppLink } from '../_components/AppLink';
import { HomeButton } from '../_components/HomeNavButton';

const CURRENT_STUDY = {
  bible: 'James',
  selfDevelopment: {
    link: 'https://drive.google.com/file/u/0/d/1-TtAEzX4wdB3kk25LrA77nr0Z4_HCkof/view',
    name: 'Act Like Men',
  },
};

export default function OnboardingPage() {
  return (
    <section>
      <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">Welcome to The Breakfast Club Men&apos;s Group - We&apos;re glad you&apos;re here!</p>

      <p className="mb-4  text-gray-500 dark:text-gray-400">
        This group exists to create a safe and encouraging space for men to encounter God through friendship, Scripture, and meaningful conversation.
      </p>

      <ul className="list-disc pl-6">
        <ul className="list-disc pl-6">
          <li>Collaboration</li>
          <ul className="list-disc pl-6">
            <li className="text-m text-gray-900 dark:text-white">
              <strong>
                Join the <AppLink href="https://groupme.com/join_group/100975787/afaATgle" content="GroupMe" />
              </strong>{' '}
              – Our main way to stay connected during the week.
            </li>
            <li className="text-m  text-gray-900 dark:text-white">
              <strong>Get Added to Red Rocks - Austin</strong> - <AppLink href="sms:9152276803" content="Text" /> Juan your <i>name</i> & <i>e-mail</i> address
              to be added to the <AppLink href="https://my.redrockschurch.com/page/562?GroupId=444198" content="Red Rocks group" />.
            </li>
          </ul>
        </ul>
        <ul className="list-disc pl-6">
          <li>Logistics</li>
          <ul className="list-disc pl-6">
            <li>
              <strong>When & Where</strong> - We meet every Friday morning from 7–8am at <AppLink href="https://g.co/kgs/YX2U325" content="Rudys" />, unless it
              falls on a holiday.
            </li>
            <li>
              <strong>What to Expect</strong> - Discussion questions are shared in advance so you can come prepared.
            </li>
          </ul>
        </ul>
        <ul className="list-disc pl-6">
          <li>Meeting Rhythms</li>
          <ul className="list-disc pl-6">
            <li>
              <strong>Odd Months (Jan, Mar, etc.)</strong> – <i>Bible Study</i>
              <ul className="list-disc pl-6">
                <li>
                  Current Study: <strong>{CURRENT_STUDY.bible}</strong>
                </li>
                <li className="ml-6">
                  <i>Tip:</i> Tap the “Gear” icon (top-right of website) to change translations.
                </li>
              </ul>
            </li>
            <li>
              <strong>Even Months (Feb, Apr, etc.)</strong> – <i>Self-Development Book</i>
              <ul className="list-disc pl-6">
                <li>
                  Current Book: <AppLink href={CURRENT_STUDY.selfDevelopment.link} content={CURRENT_STUDY.selfDevelopment.name} />
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </ul>
      <section className="flex justify-center items-center mt-4 sticky top-[90vh]">
        <HomeButton />
      </section>
    </section>
  );
}
