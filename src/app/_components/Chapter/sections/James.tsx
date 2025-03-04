import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const JamesChapterData = new Map<string, IChapterData>();
JamesChapterData.set('1', {
  book: 'Joy, Wisdom, & Trust (James 1:1-11)',
  title: 'Week 1',
  identifier: 'week-one',
  overview: (
    <div>
      <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Exegetical Context of James 1</h2>

      <ul className="list-disc pl-8">
        <li>
          <b>Authorship and Audience:</b> James, the brother of Jesus, writes to Jewish Christians scattered abroad, encouraging them amid trials.
        </li>
        <li>
          <b>Historical and Cultural Context:</b> Early Christians faced persecution, poverty, and social marginalization, shaping the letter’s focus on
          endurance and faith in action.
        </li>
        <li>
          <b>Literary Context:</b> James 1 introduces key themes like joy in trials, seeking wisdom from God, humility, and the importance of living out one’s
          faith.
        </li>
        <li>
          <b>Theological Emphasis:</b> The chapter highlights God’s purpose in trials, the need for divine wisdom, and the call to genuine faith expressed
          through obedience and humility.
        </li>
      </ul>

      <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
    </div>
  ),
  element: (
    <>
      <div>
        <Question
          question="James grew up with Jesus as his brother, but now he calls him “Lord” and “Christ” (James 1:1-4). What do you think convinced James that Jesus was truly the Lord and Messiah?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:1-4" identifier="jas.1.1-4" />
            </>
          )}
        />
        <Question question="James reminds Christians that they are like strangers and exiles in this world. How does this help us understand why we should find joy even in hard times?" />
        <Question question="The word “steadfastness” means staying strong under pressure, like holding up a heavy weight for a long time (James 1:3). How does staying strong through trials help us grow?" />
      </div>
      <div>
        <Question
          question="James tells us to ask God for wisdom when we face hard times (James 1:5-8). What is wisdom, where does it come from, and why is it so important (Proverbs 2:1-15)?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:5-8" identifier="jas.1.5-8" />
              <VerseTooltip verse="Proverbs 2:1-15" identifier="pro.2.1-15" />
            </>
          )}
        />
        <Question question="Doubt means having a divided mind and not fully trusting God (James 1:6). What are some practical ways Christians can fight doubt and trust God more fully?" />
        <Question
          question="James warns against relying on wealth or our own achievements for security (James 1:9-11). Besides wealth, what other things do people wrongly trust in instead of God?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:9-11" identifier="jas.1.9-11" />
            </>
          )}
        />
      </div>
    </>
  ),
}).set('2', {
  book: 'Endurance, Temptation, Sin, & Faithfulness (James 1:12-18)',
  title: 'Week 2',
  identifier: 'week-two',
  overview: (
    <div>
      <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Overview</h2>

      <p>
        James encourages believers to endure trials with steadfastness, reminding them that God is not responsible for their temptations—those arise from their
        own desires. Instead, God is good, unchanging, and gives the gift of new spiritual life, promising a reward for those who stand firm.
      </p>

      <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
    </div>
  ),
  element: (
    <>
      <div>
        <Question
          question="What is the reward James promises to those who endure trials (James 1:12), and what other Scriptures point to similar rewards? How should this promise motivate our walk with Christ?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:12" identifier="jas.1.12" />
            </>
          )}
        />
        <Question
          question="How are trials and temptations connected in James 1:13–15? Can you share a trial you’ve faced and the temptations that arose from it? What does Scripture teach about God ordaining trials but not tempting us?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:13-15" identifier="jas.1.13-15" />
            </>
          )}
        />
        <Question
          question="James uses metaphors of fishing and childbirth to describe temptation and sin (James 1:14–15). How have you seen the process of enticement, sin, and being “dragged away” play out in your life? What is the end result when sin is fully grown?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:14-15" identifier="jas.1.14-15" />
            </>
          )}
        />
      </div>
      <div>
        <Question
          question="Why does James emphasize God’s goodness and faithfulness in James 1:16–18? How does this contrast with human experiences of change and struggle?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:16-18" identifier="jas.1.16-18" />
            </>
          )}
        />
        <Question
          question="What does it mean to be “brought forth” by God through the “word of truth” (James 1:18)? How does this relate to the gospel and the concept of being born again (John 3:1–6)?"
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:18" identifier="jas.1.18" />
              <VerseTooltip verse="John 3:1-6" identifier="jhn.3.1-6" />
            </>
          )}
        />
        <Question
          question="How does the gift of regeneration (James 1:18) demonstrate God’s goodness? Reflect on how the truths in James 1 shape your understanding of trials, temptation, and God’s unwavering character."
          renderReference={() => (
            <>
              <VerseTooltip verse="James 1:18" identifier="jas.1.18" />
            </>
          )}
        />
      </div>
    </>
  ),
});
