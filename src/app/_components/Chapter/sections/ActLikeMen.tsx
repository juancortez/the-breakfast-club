import { Question } from '../../Question';
import { IChapterData } from '../data';

export const ActLikeMen = new Map<string, IChapterData>();
ActLikeMen.set('1', {
  book: 'Acting Like Men (Chapter 1)',
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
});
