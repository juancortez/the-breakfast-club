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
  book: 'Daniel - Week 1',
  identifier: 'daniel-chapter-one',
  element: (
    <>
      <div>
        <Question question="Placeholder question..." />
      </div>
      <div>
        <Question question="Placeholder question..." />
      </div>
    </>
  ),
});
