import { Question } from '../../Question';
import { IChapterData } from '../data';

export const ActLikeMen = new Map<string, IChapterData>();
ActLikeMen.set('1', {
  book: 'Acting Like Men',
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
})
  .set('2', {
    book: 'Quality Man',
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
  })
  .set('3', {
    book: 'Not a Quality Man',
    title: 'Not a Quality Man',
    identifier: 'not-a-quality-man',
    element: (
      <>
        <div>
          <Question question="Who is the most honorable man you know? Why do you hold that opinion of him?" />
          <Question question="Describe a time in your life you deeply regret when you honored yourself or someone you were called to lead above honoring God." />
          <Question question="How does honoring our family above the Lord actually put them at risk?" />
        </div>
        <div>
          <Question question="Describe a time in your life you honored God above yourself. How did you feel about that decision subsequently? How do you view that decision now?" />
          <Question question="What quality masculine choice can you make today to better reflect what it means to “act like a man”?" />
        </div>
      </>
    ),
  })
  .set('4', {
    book: 'And the gold goes to...',
    title: 'And the gold goes to...',
    identifier: 'and-the-gold-goes-to',
    element: (
      <>
        <div>
          <Question question="What area of pride have you most shielded from total honesty?" />
          <Question question="Why do you think we find it so hard to be honest with ourselves?" />
          <Question question="When have you been most honest about your own sin? What brought you to that point?" />
        </div>
        <div>
          <Question question="What is the biggest lie you have told yourself about yourself and for how long?" />
          <Question question="Who is the most honest and humble man you have known? How might you begin to emulate him?" />
        </div>
      </>
    ),
  })
  .set('5', {
    book: 'What are you looking at?',
    title: 'What are you looking at?',
    identifier: 'what-are-you-looking-at',
    element: (
      <>
        <div>
          <Question question="What behavior characterizes the worst men you know?" />
          <Question question="In what ways have you battled, at least on an attitude level, the very same things?" />
          <Question question="Why is it essential that we hold ourselves to a higher standard than what we see around us?" />
        </div>
        <div>
          <Question question="What good results from the practice of being harder on ourselves than others?" />
          <Question question="Why do Christians seem to struggle more than nonbelievers with judging others?" />
        </div>
      </>
    ),
  })
  .set('6', {
    book: 'Truly - as good as it gets',
    title: 'Truly - as good as it gets',
    identifier: 'truly-as-good-as-it-gets',
    element: (
      <>
        <div>
          <Question question="How does the truth that your heavenly Father is perfect impact you today?" />
          <Question question="Do you find God’s perfection motivating to your growth or overwhelming? Why?" />
          <Question question="Imagine if a light were shone on your character—what leaks would be revealed?" />
        </div>
        <div>
          <Question question="List those areas most needing attention as you pursue quality manhood." />
          <Question question="Name a specific action you can take today to advance your pursuit of quality manhood." />
        </div>
      </>
    ),
  })
  .set('7', {
    book: 'Disneyland Quality',
    title: 'Disneyland Quality',
    identifier: 'disneyland-quality',
    element: (
      <>
        <div>
          <Question question="Where have you seen quality manhood displayed in your everyday life?" />
          <Question question="What specifically do you note in that man’s example that you can emulate?" />
          <Question question="What is harder for you, right actions or right timing? Why?" />
        </div>
        <div>
          <Question question="In what ways is our challenge easier or harder than the life Jesus lived?" />
          <Question question="Describe a pastor or spiritual leader you have watched as a quality man." />
        </div>
      </>
    ),
  });
