import { Question } from '../../Question';
import { VerseTooltip } from '../../VerseTooltip';
import { IChapterData } from '../data';

export const MarkChapterData = new Map<string, IChapterData>();
MarkChapterData.set('1', {
  book: 'Repentence, Identity, & Resilience (Mark 1:1-13)',
  identifier: 'week-one#repentence-identity-resilience',
  overview: (
    <div>
      <h2 className="flex mb-4 text-lg font-medium text-gray-900 dark:text-white">Exegetical Context of Mark 1</h2>

      <ul className="list-disc pl-8">
        <li>
          <b>Authorship and Audience:</b> Mark, a companion of Peter, writes to Roman Christians—likely Gentiles—facing persecution, presenting Jesus as the
          suffering Son of God and true King.
        </li>
        <li>
          <b>Historical and Cultural Context:</b> First-century Rome was marked by imperial rule, religious pluralism, and social pressure against Christians.
          Mark opens his Gospel with bold claims of Jesus’ divine authority in contrast to Roman power.
        </li>
        <li>
          <b>Literary Context:</b> Mark 1:1–13 serves as the prologue to the Gospel, introducing Jesus’ identity, the prophetic fulfillment of His coming, His
          baptism, and His testing—all before His public ministry begins.
        </li>
        <li>
          <b>Theological Emphasis:</b> This passage reveals Jesus as the fulfillment of Old Testament prophecy, the Spirit-empowered Son of God, and the
          obedient Servant who identifies with humanity in baptism and overcomes temptation as the true and faithful Israelite.
        </li>
      </ul>

      <hr className="border-t border-gray-200 dark:border-gray-700 mt-4"></hr>
    </div>
  ),
  element: (
    <>
      <div>
        <Question
          question="Read Mark 1:1–8. John the Baptist boldly called men to repentance and prepared the way for Jesus. What would it look like for you to prepare the way for Christ in your home, workplace, and community today? Are there areas in your life where repentance still needs to happen before God can move through you?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Mark 1:1-8" identifier="mrk.1.1-8" />
            </>
          )}
        />
        <Question
          question="Read Mark 1:9–11. Jesus, though sinless, was baptized to publicly affirm obedience to the Father and to identify with humanity. As a man of God, how are you publicly identifying with Christ today? In what ways is your life affirming God’s voice: 'With you I am well pleased'?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Mark 1:9-11" identifier="mrk.1.9-11" />
            </>
          )}
        />
      </div>
      <div>
        <Question
          question="Read Mark 1:12–13. Jesus was led by the Spirit into the wilderness to be tested and refined. When have you been 'in the wilderness' and how did you respond? How does Jesus’ resistance to temptation shape your perspective on facing trials as a strong man of faith?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Mark 1:12-13" identifier="mrk.1.12-13" />
            </>
          )}
        />
      </div>
    </>
  ),
})
  .set('2', {
    book: 'Call, Commitment, & Cost (Mark 1:14-20)',
    identifier: 'week-two#call-commitment-cost',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 1:14–15. Jesus announces that 'the time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.' What does it mean today to live as a man who has truly repented and fully believes the gospel—even when doing so goes against culture, comfort, or personal ambition?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:14-15" identifier="mrk.1.14-15" />
              </>
            )}
          />
          <Question
            question="Read Mark 1:16–18. Jesus calls Simon and Andrew to 'Follow me, and I will make you become fishers of men,' and they immediately leave everything behind.What are the 'nets' in your life—habits, goals, or securities—you may be holding onto that are keeping you from fully following Jesus? What would it look like to drop them today?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:16-18" identifier="mrk.1.16-18" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 1:19-20. James and John leave behind not only their work, but also their father and the family business to follow Jesus.In what ways might God be calling you to sacrifice something valuable—even relationships, status, or control—in order to step more fully into His kingdom mission? Are you willing?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:19-20" identifier="mrk.1.19-20" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('3', {
    book: 'Authority, Power, & Freedom (Mark 1:21-28)',
    identifier: 'week-three#authority-power-freedom',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 1:22. Jesus taught with authority, unlike the scribes. In what areas of your life do you need to step up and lead with godly authority — in your home, church, or community?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:22" identifier="mrk.1.22" />
              </>
            )}
          />
          <Question
            question="Read Mark 1:25–26. Jesus confronted the unclean spirit directly and cast it out. What does spiritual warfare look like in your own walk, and how have you seen God strengthen you through it?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:25-26" identifier="mrk.1.25-26" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 1:27–28. The people were amazed at Jesus’ authority, and His fame spread. How can strong men of God reflect Jesus’ authority through our actions and character so that others see Christ in us?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:27-28" identifier="mrk.1.27-28" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('4', {
    book: 'Healing, Boldness & Celebration (Mark 1:29-34)',
    identifier: 'week-four#healing-boldness-celebration',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 1:29–31. Jesus’ healing led to immediate service. How can we as a rowdy church stay salty by serving others in a way that brings out God’s flavor in the world?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:29-31" identifier="mrk.1.29-31" />
              </>
            )}
          />
          <Question
            question="Read Mark 1:32–34. The whole city crowded the door to see Jesus. What’s one way you personally can draw others closer to Him through your life and influence?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:32-34" identifier="mrk.1.23-34" />
              </>
            )}
          />
        </div>
        <div>
          <Question question="In this section of Mark, Jesus turned sickness and oppression into joy and freedom. How can our church feel like a party and smell like a sweet fragrance so others experience the life and celebration of Jesus?" />
        </div>
      </>
    ),
  })
  .set('5', {
    book: 'Recruitment, Commitment, Preparation (Mark 1:35-45)',
    identifier: 'week-five#recruitment-commitment-preparation',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 1:35-45. How does Jesus's early morning prayer time in Mark 1:35 demonstrate his dependence on God, and how does this contrast with his disciples' expectations that he would stay and minister to the crowds?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 1:35-45" identifier="mrk.1.35-45" />
              </>
            )}
          />
          <Question question="How does Jesus's display of compassion to this 'hopeless outcast' challenge our own tendencies toward exclusion and isolation?" />
        </div>
        <div>
          <Question question="What was the consequence of the leper's decision to disobey Jesus's instructions, and what does this teach us about obedience?" />
          <Question question="How can we apply Jesus's example of engaging with outcasts in our own communities, and who is God calling you to reach with gospel compassion?" />
        </div>
      </>
    ),
  })
  .set('6', {
    book: 'Faith, Authority, Forgiveness (Mark 2:1-12)',
    identifier: 'week-six#faith-authority-forgiveness',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 2:1–5. The house was packed, the moment was tense, and everyone had their eyes on Jesus. Yet instead of healing the paralytic first, Jesus forgave his sins—shifting the focus from the physical to the spiritual. As men, where in your life are you more focused on external success, comfort, or appearance, when Jesus is actually trying to address a deeper spiritual need?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:1-5" identifier="mrk.2.1-5" />
              </>
            )}
          />
          <Question
            question="Read Mark 2:6–9. The teachers of the law silently doubted Jesus’ authority to forgive sins, but He exposed their hearts. Like Peter in Matthew 14, who sank when his attention drifted from Jesus, we often let fear or skepticism pull us away. In what areas of your life are you questioning Jesus’ authority—in your work, your family, or your personal struggles—and how can you fix your eyes back on Him?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:6-9" identifier="mrk.2.6-9" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 2:10–12. Jesus proved His authority by both forgiving sins and healing the paralytic, leaving the crowd amazed and glorifying God. When you see Jesus at work in your life, do you consistently respond with worship and obedience, or do you let amazement fade into forgetfulness? What practical steps can you take this week to glorify God publicly as a man under Christ’s authority?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:10-12" identifier="mrk.2.10-12" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('7', {
    book: 'Invitation, Joy, Renewal (Mark 2:13-22)',
    identifier: 'week-seven#invitation-joy-renewal',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 2:13–17. Jesus calls Levi and shares a meal with tax collectors and sinners. What does this reveal about God’s heart for people, and how can our worshipful response to Jesus shape the way we treat those others might avoid?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:13-17" identifier="mrk.2.13-17" />
              </>
            )}
          />
          <Question
            question="Read Mark 2:18–20. Jesus calls Himself the Bridegroom and explains why His disciples don’t fast while He is with them. What does this picture of a wedding celebration teach us about the joy and freedom that come with following Jesus—and how might we reflect that joy in our daily lives?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:18-20" identifier="mrk.2.18-20" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 2:21–22. Jesus teaches that new wine needs new wineskins. What “old wineskins” might need to be surrendered in your life, and how could practicing worship in fresh ways make space for His new work in you and in our church?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:12-22" identifier="mrk.2.21-22" />
              </>
            )}
          />
        </div>
      </>
    ),
  })
  .set('8', {
    book: 'Lordship, Compassion, Response (Mark 2:23-3:12)',
    identifier: 'week-eight#lordship-compassion-response',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 2:23–28. What does “the Sabbath was made for man” show about God’s heart behind His commands?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 2:23–28" identifier="mrk.2.23-28" />
              </>
            )}
          />
          <Question
            question="Read Mark 3:1–6. What does Jesus’ healing on the Sabbath teach about choosing compassion over comfort?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 3:1-6" identifier="mrk.3.1-6" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 3:7–12. What causes some to harden toward Jesus and others to draw near to Him in life’s fires?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 3:7-12" identifier="mrk.3.7-12" />
              </>
            )}
          />
          <Question question="If Jesus is Lord of today, what would it look like to obey Him in one specific area of your life right now, instead of waiting for a “better time”?" />
        </div>
      </>
    ),
  })
  .set('9', {
    book: 'Authority, Allegiance, Identity (Mark 3:13-3:35)',
    identifier: 'week-nine#authority-allegiance-identity',
    overview: (
      <div>
        The following questions draw from <VerseTooltip verse="Mark 3:13-3:35" identifier="mrk.3.13-35" inline />, a passage filled with challenge, clarity, and
        calling.
      </div>
    ),
    element: (
      <>
        <div>
          <Question question='What does Jesus mean by "blasphemy against the Holy Spirit," and why is it called unforgivable? How does the concept of "blasphemy against the Holy Spirit" apply to us today?' />
          <Question question='Why do Jesus own relatives think he is "out of his mind"? What does their attempt to seize him reveal about the challenge of following Gods will even when it is misunderstood by those closest to us?' />
        </div>
        <div>
          <Question question="How do we become part of Jesus's spiritual family? How should this teaching affect our relationships with our biological families while we also serve God?" />
        </div>
      </>
    ),
  })
  .set('10', {
    book: 'Hear, Receive, Grow (Mark 4:1-20)',
    identifier: 'week-ten#hear-receive-grow',
    element: (
      <>
        <div>
          <Question
            question="Read Mark 4:1–9. What does Jesus’ picture of the four soils reveal about the different ways we receive God’s word, and which “soil condition” do you see showing up in your life right now?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 4:1-9" identifier="mrk.4.1-9" />
              </>
            )}
          />
          <Question
            question="Read Mark 4:10–12. How does Jesus’ explanation of why He teaches in parables challenge the way you think about hearing, understanding, and actually obeying what God asks of you?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 4:10-12" identifier="mrk.4.10-12" />
              </>
            )}
          />
        </div>
        <div>
          <Question
            question="Read Mark 4:13–20. What does Jesus’ description of “bearing fruit”—thirty, sixty, or a hundredfold—teach us about living with open hands, planting generously, and trusting God to grow what we release?"
            renderReference={() => (
              <>
                <VerseTooltip verse="Mark 4:13-20" identifier="mrk.4.13-20" />
              </>
            )}
          />
          <Question question="What part of your life needs tending today so God’s word can actually take root?" />
        </div>
      </>
    ),
  });
