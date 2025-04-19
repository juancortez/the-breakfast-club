import { AppLink } from '../../AppLink';
import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const RedRocksSermons = new Map<string, IChapterData>();
RedRocksSermons.set('1', {
  book: 'Christmas: Messy or Amazing?',
  identifier: 'questions',
  overview: (
    <p>
      Discussion questions for{' '}
      <a className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/watch?v=7B9Huh-4fdA">
        Christmas: Messy or Amazing? | Pastor Shawn Johnson
      </a>{' '}
      sermon from Dec 26, 2023.
    </p>
  ),
  element: (
    <>
      <div>
        <Question question="What is the most meaningful gift you’ve ever received? Why? What about the most meaningful gift you’ve ever given?" />
        <Question question="What is one thing you can do for yourself that your mind, body, or spirit really needs this holiday break, whether you have one day off or two weeks?" />
        <Question
          question="Read Luke 2:4-20. How often does your Christmas season measure up to the expectations you had for it beforehand? What do you focus on most? What draws most of your attention and energy?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Luke 2:4-20" identifier="luk.2.4-20" />
            </>
          )}
        />
      </div>
      <div>
        <Question question="How have you seen God show up and bring good news and great joy in seasons of messiness?" />
        <Question
          question="Read the following verses. How does God’s view of this time of year compare to yours? How can you switch your perspective to be more like God’s?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Romans 3:23" identifier="rom.12.3" />
              <VerseTooltip verse="Romans 5:8" identifier="rom.5.8" />
              <VerseTooltip verse="Romans 6:23" identifier="rom.6.23" />
              <VerseTooltip verse="Romans 8:1" identifier="rom.8.1" />
              <VerseTooltip verse="Romans 10:9" identifier="rom.10.9" />
            </>
          )}
        />
      </div>
    </>
  ),
})
  .set('2', {
    book: 'Made on Purpose, For a Purpose',
    identifier: 'made-on-purpose',
    overview: (
      <p>
        Discussion questions for{' '}
        <a className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/watch?v=3c55Gweg_m4">
          Made on Purpose, For a Purpose | Pastor Doug Wekenman
        </a>{' '}
        sermon from January 12, 2025.
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
  })
  .set('3', {
    book: 'Get Ready to Change the World',
    identifier: 'ready-to-change-world',
    overview: (
      <p>
        Discussion questions for <AppLink href="https://www.youtube.com/watch?v=MSMQRyOyLQw&t=1s" content="Get Ready to Change the World | Ethan Matott" />{' '}
        sermon from January 19, 2025.
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
