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
          question="Read Mark 1:9–11. Jesus, though sinless, was baptized to publicly affirm obedience to the Father and to identify with humanity. As a man of God, how are you publicly identifying with Christ today? In what ways is your life affirming God’s voice: “With you I am well pleased”?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Mark 1:9-11" identifier="mrk.1.9-11" />
            </>
          )}
        />
      </div>
      <div>
        <Question
          question="Read Mark 1:12–13. Jesus was led by the Spirit into the wilderness to be tested and refined. When have you been “in the wilderness” and how did you respond? How does Jesus’ resistance to temptation shape your perspective on facing trials as a strong man of faith?"
          renderReference={() => (
            <>
              <VerseTooltip verse="Mark 1:12-13" identifier="mrk.1.12-13" />
            </>
          )}
        />
      </div>
    </>
  ),
});
