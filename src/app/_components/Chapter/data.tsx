import { Question } from '../Question';

export interface IChapterData {
  book: string;
  identifier: string;
  element: JSX.Element;
  // https://tailwindcomponents.com/gradient-generator/
  gradient?: string;
}

export const ChapterData = new Map<string, IChapterData>();
ChapterData.set('1', {
  book: 'Faith in Exile',
  identifier: 'daniel-chapter-one',
  element: (
    <>
      <div>
        <Question question="How do we maintain our Christian identity in a world that may challenge our beliefs?" />
        <Question question="What are modern-day examples of situations where we might need to draw a boundary, like Daniel and his friends did with food?" />
      </div>
      <div>
        <Question question="How can we find the balance between participating in culture and remaining faithful to God’s commands?" />
      </div>
    </>
  ),
});
