import { Question } from '../../Question';
import { IChapterData } from '../data';

export const DanielChapterData = new Map<string, IChapterData>();
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
