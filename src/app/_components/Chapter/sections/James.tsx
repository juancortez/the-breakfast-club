import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const JamesChapterData = new Map<string, IChapterData>();
JamesChapterData.set('1', {
  book: 'Joy, Wisdom, & Trust (James 1:1-11)',
  identifier: 'week-one#joy-wisdom-trust',
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
})
  .set('2', {
    book: 'Endurance, Temptation, Sin, & Faithfulness (James 1:12-18)',
    identifier: 'week-two#endurance-temptation-sin-faithfulness',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Overview</h2>

        <p>
          James encourages believers to endure trials with steadfastness, reminding them that God is not responsible for their temptations—those arise from
          their own desires. Instead, God is good, unchanging, and gives the gift of new spiritual life, promising a reward for those who stand firm.
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
  })
  .set('3', {
    book: 'Listen, Obey, Reflect (James 1:19-27)',
    identifier: 'week-three#listen-obey-reflect',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Overview</h2>

        <p>
          James 1:19–27 emphasizes the practical outworking of genuine faith. Addressed to Jewish Christians, the passage contrasts mere hearing of God&apos;s
          word with actively doing it. James teaches that true faith transforms behavior—believers must be quick to listen, slow to speak, and slow to anger, as
          these qualities prepare the heart to receive God’s word. He underscores that the &quot;implanted word&quot; brings salvation and should lead to
          action, not just knowledge. True religion, according to James, involves controlling one’s speech, caring for the vulnerable, and living in holiness.
          This passage sets the foundation for the rest of the letter, where faith is shown through works.
        </p>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="How does our ability (or struggle) to listen well impact our relationships and spiritual growth? (James 1:19-21)"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 1:19-21" identifier="jas.1.19-21" />
              </>
            )}
          />
          <Question
            question="What are some ways we might mistake knowing about God’s Word for actually living it out? (James 1:22-25)"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 1:22-25" identifier="jas.1.22-25" />
              </>
            )}
          />
          <Question question="Why do you think James uses the analogy of a mirror? How does this challenge us to examine our daily habits and decisions?" />
        </div>
        <div>
          <Question question="What does it mean for faith to be practical? How do small, consistent actions shape our character over time?" />
          <Question
            question="How do speech, care for others, and personal integrity reflect a transformed life? (James 1:26-27)"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 1:26-27" identifier="jas.1.18" />
              </>
            )}
          />
          <Question question="What steps can we take to live with greater intentionality in applying what we learn from Scripture?" />
        </div>
      </>
    ),
  })
  .set('4', {
    book: 'Partiality, Love, Mercy (James 2:1-13)',
    identifier: 'week-four#partiality-love-mercy',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Exegetical Context of James 2:1–13</h2>

        <ul className="list-disc pl-8">
          <li>
            <b>Literary Context:</b> James 2:1-13 expands on pure religion by condemning favoritism toward the wealthy while connecting to the broader theme
            that genuine faith must be demonstrated through actions.
          </li>
          <li>
            <b>Historical and Cultural Context:</b> In the class-conscious Greco-Roman world where early Christians gathered, James challenged cultural norms of
            preferential treatment for the wealthy, especially relevant to communities facing economic hardship.
          </li>
          <li>
            <b>Theological Context:</b> James grounds his teaching in God&apos;s impartiality and the &quot;royal law&quot; of loving one&apos;s neighbor,
            emphasizing that mercy triumphs over judgment.
          </li>
          <li>
            <b>Summary:</b> James 2:1-13 illustrates how authentic faith manifests in just and merciful behavior that rejects societal favoritism while
            establishing the foundation for the faith-works discourse that follows.
          </li>
        </ul>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 2:1–4. Where do you see partiality or favoritism in your own life? How does it manifest in your relationships at work, church, or even within your family?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:1-4" identifier="jas.2.1-4" />
              </>
            )}
          />
          <Question
            question="Read James 2:5–7. Why do people naturally gravitate toward favoring the rich and powerful? What are the underlying fears or desires that drive this behavior, and how can we combat them in our own hearts?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:5-7" identifier="jas.2.5-7" />
              </>
            )}
          />
          <Question question="James highlights how God chooses the poor in the world to be rich in faith. How does this challenge the way we measure success, influence, and value in our society today?" />
        </div>
        <div>
          <Question
            question="Read James 2:8–9. James refers to the command to “love your neighbor as yourself” as the “royal law.” What does this mean in practice, and how can we ensure that our love is not selective but reflects Christ’s love for all people?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:8-9" identifier="jas.2.8-9" />
              </>
            )}
          />
          <Question
            question="Read James 2:10–12. James warns that breaking one part of God’s law makes us accountable for all of it. How does this truth shape our understanding of sin and our need for grace?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:10-12" identifier="jas.2.10-12" />
              </>
            )}
          />
          <Question
            question="Read James 2:13. How have you experienced God’s mercy in your own life? In what ways can you extend that same mercy to others instead of judgment or favoritism?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:13" identifier="jas.2.13" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('5', {
    book: 'Trust, Act, Conquer (James 2:14–26)',
    identifier: 'week-five#trust-act-conquer',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Overview</h2>

        <p>
          To this point in his letter, James has been making the case that once the new birth has happened to a person, it should result in a life of doing
          God’s word. In the first part of James 2, he began working that principle out in one specific example—his readers’ wrong practice of showing
          partiality to the rich and powerful.
        </p>

        <br />

        <p>
          Now, in James 2:14–26, he returns to the principle itself, arguing theologically and biblically for its truth. Faith, James argues, always results in
          a life of obedience and good works. And a “faith” that does not do so is not saving faith at all; it is, rather, dead faith.
        </p>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 2:14-17. James starts with a challenging question: can faith without works save us? How does James describe a so-called 'faith' that only talks but doesn't act, and why is that dangerous for us as men today?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:14-17" identifier="jas.2.14-17" />
              </>
            )}
          />
          <Question
            question="Read James 2:18-20. Demons believe in God and tremble — what does it look like for a man to move beyond belief and actually live his trust in God?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:18-20" identifier="jas.2.18-20" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read James 2:21–25. James shows two examples — Abraham risking his son and Rahab risking her life. What do these examples teach us about how real faith will stretch us into risky, courageous obedience? How is God calling you to take a step of living faith today?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:21–25" identifier="jas.2.21-25" />
              </>
            )}
          />
          <Question
            question="Read James 2:26. James wraps it up by comparing faith without works to a corpse — no life, no movement. What are some signs of 'dead faith' that men need to watch out for? What does it look like for you to have a living, breathing faith this week?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 2:26" identifier="jas.2.26" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('6', {
    book: 'Discipline, Wisdom, & Integrity (James 3:1-8)',
    identifier: 'week-six#discipline-wisdom-integrity',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Exogenic Dimensions</h2>

        <i>
          How the truths of this passage confront and apply to the external realities of our modern lives—especially in culture, leadership, communication, and
          the formation of men today.
        </i>

        <br />
        <br />

        <p>
          James 3:1–18 confronts today’s culture of loud, prideful speech by calling men to a higher standard—one where true strength is measured not by
          dominance but by self-controlled, peace-making words rooted in godly wisdom. In a world full of noise and ambition, this passage demands that men lead
          with integrity, tame their tongues, and reflect Christ through meekness and purity.
        </p>

        <br />

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 3:1–5. Strong men don’t just lead—they lead with their words; where in your life do you need greater discipline over your tongue, and what does that say about the direction of your heart?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 3:1-5" identifier="jas.3.1-5" />
              </>
            )}
          />
          <Question
            question="Read James 3:6–8. When have your words either built up or torn down, and what does that reveal about your maturity as a man of God?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 3:6-8" identifier="jas.3.6-8" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read James 3:9–12. How can you grow into a man who refuses to bless God on Sunday and curse people on Monday—and instead speaks with integrity everywhere?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 3:9-12" identifier="jas.3.9-12" />
              </>
            )}
          />
          <Question
            question="Read James 3:13–18. Are you living with the bold humility and peace that marks true wisdom from above, or are pride and selfish ambition silently leading your life?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 3:13-18" identifier="jas.3.13-18" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('7', {
    book: 'Desire, Repent, Submit (James 4:1-12)',
    identifier: 'week-7#jas.4.1-12',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">The Place of the Passage</h2>

        <p>
          In James 3, the author began dealing with the problem of quarreling and backbiting within the church. The immediate issue seems to have been people
          competing with one another for position within the church (James 3:1), and they were using their tongues to tear one another down. Having spoken about
          the tongue’s evil and the power of wisdom to counteract it, James turns in James 4 to consider the quarrels themselves. In a brilliant explanation of
          human nature, fallen as it is, he shows that quarrels are the result of unfulfilled, prideful desires warring within us, and he then exhorts his
          readers to repent of their pride.
        </p>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 4:1–3. What personal desires or frustrations are causing conflict in your life—and how do they affect your relationship with others and with God?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:1-3" identifier="jas.4.1-3" />
              </>
            )}
          />
          <Question
            question="Read James 4:4–6. Are there areas in your life where you're chasing what the world offers instead of what God wants—and how can you begin turning back to Him?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:4–6" identifier="jas.4.4-6" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read James 4:7–10. What does it look like to start choosing God's way instead of going your own way—and how can you begin resisting temptation today?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:7–10" identifier="jas.4.7-10" />
              </>
            )}
          />
          <Question
            question="Read James 4:11–12. Why is it wrong to speak badly about others—and how does judging people get in the way of loving them like God tells us to?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:11-12" identifier="jas.4.11-12" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('8', {
    book: 'Pride, Injustice, & Judgment (James 4:13-5:6)',
    identifier: 'week-8#jas.4.13-5.6',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">The Place of the Passage</h2>

        <p>
          In this passage, James continues to unfold his main point that new life in Christ should result in a life of obedience to God’s Word. Here he
          addresses particularly the sins of the wealthy. First he addresses the sin of pride in those who would forget that their lives are completely in the
          hand of the Lord. Then he turns to warn of the coming judgment against those who would use their wealth and power to oppress God’s people. This is
          some of the most strident language in the book, and it underlines the sin and folly of human pride—especially when our pride sets us in opposition to
          God and his people.
        </p>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 4:13–14. What does planning without reference to God reveal about our view of life and His sovereignty?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:13-14" identifier="jas.4.13-14" />
              </>
            )}
          />
          <Question
            question="Read James 4:15–17. How can we rightly plan for the future while living in humble dependence on God's will?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 4:15-17" identifier="jas.4.15-17" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read James 5:1–4. What injustices are condemned here, and how might similar forms of oppression appear in our world today?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 5:1-14" identifier="jas.5.1-4" />
              </>
            )}
          />
          <Question
            question="Read James 5:5–6. How does the warning of coming judgment challenge us to evaluate how we use wealth, comfort, and power?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 5.5-6" identifier="jas.5.5-6" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('9', {
    book: 'Patience, Integrity, & Endurance (James 5:7-12)',
    identifier: 'week-9#jas.5.7-12',
    overview: (
      <div>
        <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">The Place of the Passage</h2>

        <p>
          Having warned the rich and powerful oppressors of God’s people about the coming judgment, James turns now to encourage the church with the same
          reality. One day, Jesus Christ will come again to rescue his people from those who oppress and persecute them. He will put an end to injustice and
          evil. In light of that reality, God’s people should live and wait patiently, as a farmer waits patiently for his crops to grow from the earth. That
          patience is warranted precisely because God has shown himself faithful. He will, without fail, keep his promises, just as he always has.
        </p>

        <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
      </div>
    ),
    element: (
      <>
        <div>
          <Question
            question="Read James 5:7–9. James urges us to be patient like a farmer and to establish our hearts because “the coming of the Lord is at hand.” Where in your life are you tempted to rush instead of wait? What does a strong man do when the harvest is slow and the pressure is high?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 5:7-9" identifier="jas.5.7-9" />
              </>
            )}
          />
          <Question
            question="Read James 5:10-11. James points to the prophets and Job as examples of patience in suffering. What can we learn from them about facing hardship without giving up or giving in? How do the compassion and purpose of the Lord give you strength to endure?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 5:10-11" identifier="jas.5.10-11" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read James 5:12. James challenges us to let our “yes” be yes and our “no” be no. Why does integrity matter so much for men of faith? How does a heart that’s anchored in Christ show up in how you speak and follow through?"
            renderReference={() => (
              <>
                <VerseTooltip verse="James 5:12" identifier="jas.5.12" />
              </>
            )}
          />
        </div>
      </>
    ),
  });
