import { AppLink } from '../../AppLink';
import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const Jan2025SermonsData = new Map<string, IChapterData>();
Jan2025SermonsData.set('1', {
  book: 'Discussion',
  title: 'Made on Purpose, For a Purpose',
  identifier: 'made-on-purpose',
  overview: (
    <p>
      Discussion questions for{' '}
      <a className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/watch?v=3c55Gweg_m4">
        Made on Purpose, For a Purpose | Pastor Doug Wekenman
      </a>{' '}
      sermon.
    </p>
  ),
  element: (
    <>
      <div>
        <Question
          question="Read Ephesians 2:10. How does knowing you are God’s handiwork shape the way you view your life and purpose?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Ephesians 2:10" identifier="eph.2.10" />
            </>
          )}
        />
        <Question question="What does it mean for you personally to step into the good works God has prepared for you?" />
        <Question question="How does the idea of God shaping you through challenges change the way you approach difficulties?" />
        <Question
          question="Read 2 Corinthians 5:17. How does understanding your identity as a new creation impact your perspective on purpose?"
          renderReference={() => (
            <>
              <VerseTooltip verse="2 Corinthians 5:17" identifier="2co.5.17" />
            </>
          )}
        />
      </div>
      <div>
        <Question question="What areas of your life need the most alignment with your identity as a new creation?" />
        <Question question="What steps can you take this week to live more intentionally as a reflection of Christ?" />
        <Question question="How can spiritual disciplines such as prayer, fasting, and worship help you align with your identity as a new creation?" />
      </div>
    </>
  ),
}).set('2', {
  book: 'Discussion',
  title: 'Get Ready to Change the World',
  identifier: 'ready-to-change-world',
  overview: (
    <p>
      Discussion questions for <AppLink href="https://www.youtube.com/watch?v=MSMQRyOyLQw&t=1s" content="Get Ready to Change the World | Ethan Matott" />{' '}
      sermon.
    </p>
  ),
  element: (
    <>
      <div>
        <Question question="How have you actively lived in the one area you felt God calling you to live more intentionally in the past week?" />
        <Question question="What was the most impactful lesson this series has taught you so far?" />
        <Question
          question="Read Matthew 28:18-20. How can you shift from the mindset of unqualified to the mindset of being called according to His purpose?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Matthew 28:18-20" identifier="MAT.28.18-20" />
            </>
          )}
        />
        <Question question="What is one area of discipleship making you hesitant in that committed identity?" />
        <Question question="How can daily sanctification shape and mold you into making a daily impact on the world?" />
      </div>
      <div>
        <Question
          question="Read John 13:34-35. How can knowing you have all that you need to be equipped move you to a place of confidence to go into the world?"
          renderReference={() => (
            <>
              <VerseTooltip verse="John 13:34-35" identifier="jhn.13.34-35" />
            </>
          )}
        />
        <Question question="How does maintaining a heavenly perspective ease the anxiety of discipleship?" />
        <Question question="What one thing do you need to let go of that is hindering you from paying the price for His mission?" />
        <Question question="In what ways can you display and share the love of Christ through your words and deeds?" />
      </div>
    </>
  ),
});
