import { Question } from '../Question';
import { VerseTooltip } from '../VerseTooltip';

export interface IChapterData {
  book: string;
  identifier: string;
  element: JSX.Element;
  title: string;
  overview?: JSX.Element;
  // https://tailwindcomponents.com/gradient-generator/
  gradient?: string;
}
export type ChapterTopic = 'the-book-of-daniel' | 'christmas-messy-or-amazing';

const DanielChapterData = new Map<string, IChapterData>();
DanielChapterData.set('1', {
  book: 'Faith in Exile',
  title: 'Week 1',
  identifier: 'daniel-week-one',
  element: (
    <>
      <div>
        <Question question="What are your initial thoughts after reading this chapter, did anything stand out to you?" />
        <Question question="How do we maintain our Christian identity in a world that may challenge our beliefs?" />
      </div>
      <div>
        <Question question="What are modern-day examples of situations where we might need to draw a boundary, like Daniel and his friends did with food?" />
        <Question question="How can we find the balance between participating in culture and remaining faithful to God’s commands?" />
      </div>
    </>
  ),
})
  .set('2', {
    book: 'Nebuchadnezzar’s Dream',
    title: 'Week 2',
    identifier: 'daniel-week-two',
    element: (
      <>
        <div>
          <Question question="In what ways do we sometimes place our hope in human achievements or governments rather than God’s kingdom?" />
          <Question question="How can we better trust God’s control over world events and personal uncertainties in our lives?" />
        </div>
        <div>
          <Question question="What are practical ways to respond with faith, like Daniel, when faced with difficult situations at work, home, or in society?" />
        </div>
      </>
    ),
  })
  .set('3', {
    book: 'The Fiery Furnace',
    title: 'Week 3',
    identifier: 'daniel-week-three',
    element: (
      <>
        <div>
          <Question question="What pressures do you face today that challenge your faith? How can you respond with courage like Shadrach, Meshach, and Abednego?" />
          <Question question="How does knowing that God is with us in the ‘fire’ (our trials) change the way we face difficult situations?" />
        </div>
        <div>
          <Question question="How can we support and encourage each other to stand firm in faith when we face opposition or hardship?" />
        </div>
      </>
    ),
  })
  .set('4', {
    book: 'Nebuchadnezzar’s Humbling & the Fall of Babylon',
    identifier: 'daniel-week-four',
    title: 'Week 4',
    element: (
      <>
        <div>
          <Question question="What areas of pride might God be calling you to surrender?" />
          <Question question="When have you experienced a “wake-up call” from God in your life? How did that impact your relationship with Him?" />
        </div>
        <div>
          <Question question="How can we practice humility in a culture that often values self-promotion and pride?" />
        </div>
      </>
    ),
  })
  .set('5', {
    book: 'Daniel in the Lion’s Den',
    identifier: 'daniel-week-five',
    title: 'Week 5',
    element: (
      <>
        <div>
          <Question question="What habits, like Daniel’s prayer life, can you cultivate that will help you stand strong in faith when trials come?" />
          <Question question="How do we respond when following God leads to opposition or difficulty in our daily life (at work, in relationships, etc.)?" />
        </div>
        <div>
          <Question question="How can Daniel’s example inspire us to be consistent in our faith, even when no one is watching?" />
        </div>
      </>
    ),
  })
  .set('6', {
    book: 'Visions of the Future ',
    identifier: 'daniel-week-six',
    title: 'Week 6',
    element: (
      <>
        <div>
          <Question question="How does the reality of God’s ultimate victory over evil impact the way we live today?" />
          <Question question="In light of Daniel’s vision of the future, how should we respond to current global and personal challenges?" />
        </div>
        <div>
          <Question question="How can we live with hope and perseverance, knowing that God’s plan is unfolding even when the world feels chaotic?" />
        </div>
      </>
    ),
  });

const ChristmasData = new Map<string, IChapterData>();
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

export const getChapterDataByTopic = (topic: ChapterTopic): Map<string, IChapterData> => {
  if (topic === 'the-book-of-daniel') {
    return DanielChapterData;
  }
  return ChristmasData;
};

export const topicIdentifierToReadable = (topic: ChapterTopic) => {
  switch (topic) {
    case 'christmas-messy-or-amazing':
      return 'Christmas: Messy or Amazing?';
    case 'the-book-of-daniel':
      return 'The Book of Daniel';
  }
};
