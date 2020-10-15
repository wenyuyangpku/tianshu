import { ReactNode } from 'react';

export interface TopLevelSpec {
  title: string;
  author: string;
  content: ContentSpec[];
}

export interface ContentSpec {
  title: string;
  section: SectionSpec[];
}

export type SectionSpec =
  | ({ type: 'ul' } & UnorderedListSpec)
  | ({ type: 'ol' } & OrderedListSpec)
  | ({ type: 'highlight' } & HighlightSpec)
  | ({ type: 'p' } & ParagraphSpec)
  | ({ type: 'hide' } & HideSpec)

export interface UnorderedListSpec {
  content: string[];
}

export interface OrderedListSpec {
  content: string[];
}

export interface HighlightSpec {
  language?:
    | 'bash'
    | 'javascript'
    | 'typescript'
    | 'json'
    | 'css'
    | 'yaml'
    | 'markdown'
    | 'md'
    | 'jsx'
    | 'tsx';
  withHTMLChildren?: boolean;
  children?: ReactNode;
}

export interface ParagraphSpec {
  content: string;
}

export interface HideSpec{
  display:''|'none';
  content: ContentSpec[];
}