import { RedRocksSermons } from './sections/RedRocksSermons';
import { DanielChapterData } from './sections/Daniel';
import { ActLikeMen } from './sections/ActLikeMen';
import { ManInTheMirrorData } from './sections/ManInTheMirror';
import { JamesChapterData } from './sections/James';
import { MarkChapterData } from './sections/Mark';

export interface IChapterData {
  book: string;
  identifier: string;
  element: JSX.Element;
  overview?: JSX.Element;
  // https://tailwindcomponents.com/gradient-generator/
  gradient?: string;
  conclusion?: JSX.Element;
}
export type ChapterTopic = 'the-book-of-daniel' | 'red-rocks-sermons' | 'act-like-men' | 'man-in-the-mirror' | 'james' | 'mark';

export const TOPICS: ChapterTopic[] = ['mark', 'act-like-men', 'james', 'red-rocks-sermons', 'the-book-of-daniel', 'man-in-the-mirror'] as const;

export const getChapterDataByTopic = (topic: ChapterTopic): Map<string, IChapterData> => {
  switch (topic) {
    case 'red-rocks-sermons':
      return RedRocksSermons;
    case 'the-book-of-daniel':
      return DanielChapterData;
    case 'act-like-men':
      return ActLikeMen;
    case 'man-in-the-mirror':
      return ManInTheMirrorData;
    case 'james':
      return JamesChapterData;
    case 'mark':
      return MarkChapterData;
    default:
      throw new Error('Unsupported');
  }
};

export const topicIdentifierToReadable = (topic: ChapterTopic) => {
  switch (topic) {
    case 'the-book-of-daniel':
      return 'The Book of Daniel';
    case 'red-rocks-sermons':
      return 'Red Rocks Sermons';
    case 'act-like-men':
      return 'Act Like Men';
    case 'man-in-the-mirror':
      return 'Man in the Mirror';
    case 'james':
      return 'The Book of James';
    case 'mark':
      return 'The Book of Mark';
  }
};
