import { Jan2025SermonsData } from './sections/January2025';
import { DanielChapterData } from './sections/Daniel';
import { ChristmasData } from './sections/Christmas2024';
import { ActLikeMen } from './sections/ActLikeMen';
import { ManInTheMirrorData } from './sections/ManInTheMirror';
import { JamesChapterData } from './sections/James';

export interface IChapterData {
  book: string;
  identifier: string;
  element: JSX.Element;
  title: string;
  overview?: JSX.Element;
  // https://tailwindcomponents.com/gradient-generator/
  gradient?: string;
}
export type ChapterTopic = 'the-book-of-daniel' | 'christmas-messy-or-amazing' | 'january-2025-sermons' | 'act-like-men' | 'man-in-the-mirror' | 'james';

export const getChapterDataByTopic = (topic: ChapterTopic): Map<string, IChapterData> => {
  switch (topic) {
    case 'christmas-messy-or-amazing':
      return ChristmasData;
    case 'january-2025-sermons':
      return Jan2025SermonsData;
    case 'the-book-of-daniel':
      return DanielChapterData;
    case 'act-like-men':
      return ActLikeMen;
    case 'man-in-the-mirror':
      return ManInTheMirrorData;
    case 'james':
      return JamesChapterData;
    default:
      throw new Error('Unsupported');
  }
};

export const topicIdentifierToReadable = (topic: ChapterTopic) => {
  switch (topic) {
    case 'christmas-messy-or-amazing':
      return 'Christmas: Messy or Amazing?';
    case 'the-book-of-daniel':
      return 'The Book of Daniel';
    case 'january-2025-sermons':
      return 'January 2025 Sermons';
    case 'act-like-men':
      return 'Act Like Men';
    case 'man-in-the-mirror':
      return 'Man in the Mirror';
    case 'james':
      return 'The Book of James';
  }
};
