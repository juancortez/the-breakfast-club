import { Question } from '../../Question';
import { IChapterData } from '../data';

export const ActLikeMen = new Map<string, IChapterData>();
ActLikeMen.set('1', {
  book: 'Week 1 - Acting Like Men',
  title: 'Acting Like Men',
  identifier: 'acting-like-men',
  element: (
    <>
      <div>
        <Question question="How would you define biblical manhood in today’s culture, and how does it differ from worldly definitions of masculinity?" />
        <Question question="How do you avoid the pitfalls of acting like a boy (self-centered immaturity), an animal (selfish instincts), or a superhero (trying to do it all alone)?" />
        <Question question="How can you encourage younger men or boys to embrace their God-given roles as they grow into maturity?" />
      </div>
      <div>
        <Question question="What can you do today and this week to be a better servant leader to your family?" />
        <Question question="In what ways might recent actions have appeared selfish, and what can you do today to correct that?" />
        <Question question="Do you agree that a man keeping his word and refusing to  make excuses is a good summary of manhood? Why?" />
      </div>
    </>
  ),
}).set('2', {
  book: 'Week 2 - A Quality Man',
  title: 'A Quality Man',
  identifier: 'a-quality-man',
  element: (
    <>
      <div>
        <Question question="What does it mean to be a “quality man” or person of integrity, and how can trusting God help us overcome fear and anger to live out this calling?" />
        <Question question="How can we prioritize our faith and family in a way that aligns with biblical principles and leads to lasting growth and impact?" />
        <Question question="Which is the tougher issue for me, fear or anger? Why?" />
      </div>
      <div>
        <Question question="When was the last time I used fear or anger to deflect a deeper hurt?" />
        <Question question="Who is most negatively impacted by my unresolved hurt and what should I do about it?" />
        <Question question="Who do I need to forgive and for what? Why have I not acted on this sooner?" />
      </div>
    </>
  ),
});

// Fear and anger are described as obstacles to being a quality man. What role do these emotions play in your life, and how can trusting God (e.g., 2 Timothy 1:7) help you overcome them?
