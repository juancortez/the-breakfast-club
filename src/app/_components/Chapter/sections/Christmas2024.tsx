import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const ChristmasData = new Map<string, IChapterData>();
ChristmasData.set('1', {
  book: 'Discussion',
  title: 'Christmas: Messy or Amazing?',
  identifier: 'questions',
  overview: (
    <p>
      Discussion questions for{' '}
      <a className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="https://www.youtube.com/watch?v=7B9Huh-4fdA">
        Christmas: Messy or Amazing? | Pastor Shawn Johnson
      </a>{' '}
      sermon.
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
});
