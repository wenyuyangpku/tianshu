/* eslint-disable react/no-danger, global-require */
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';

import { color } from '../shared/styles';
import { HighlightSpec } from '../../type/topLevelSpec';

declare let global: NodeJS.Global & typeof globalThis & { Prism: typeof Prism };

if (typeof document !== 'undefined') {
  global.Prism = Prism;
  require('prismjs/components/prism-bash');
  require('prismjs/components/prism-javascript');
  require('prismjs/components/prism-typescript');
  require('prismjs/components/prism-json');
  require('prismjs/components/prism-css');
  require('prismjs/components/prism-yaml');
  require('prismjs/components/prism-markdown');
  require('prismjs/components/prism-jsx');
  require('prismjs/components/prism-tsx');
}

// Prism theme copied from 'prismjs/themes/prism.css.' -- without Webpack, the CSS
// cannot be imported easily and any app which pulls in the design system will
// need to handle the CSS loading itself. Therefore, it is easiest to just copy
// the theme over.
// prettier-ignore
const HighlightBlock = styled.div`
  /*
    Line below from: prismjs/themes/prism.css, with removal of overly specific
    selectors (primarily [class*=language-]) and selectors that collide with our
    global styling (primarly code & pre selectors).
  */
  .token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}

  code, pre {
    color: ${color.darkest};
    font-size: 16px;
  }

  code {
    white-space: pre;
  }

  pre {
    padding: 11px 1rem;
    margin: 1rem 0;
    background: ${color.lighter};
    overflow: auto;
  }

  .language-bash .token.operator,
  .language-bash .token.function,
  .language-bash .token.builtin {
    color: ${color.darkest};
    background: none;
  }

  .language-markdown .token.title,
  .language-md .token.title {
    color: #dd4a68;
  }

  .language-markdown .token.table-header,
  .language-md .token.table-header {
    color: #07a;
  }
`;

export const Highlight: FunctionComponent<HighlightSpec> = ({
  children,
  withHTMLChildren = true,
  language,
}: HighlightSpec) => {
  const refContainer = useRef(null);

  const [content, setContent] = useState('');

  useEffect(() => setContent(children.toString()), []);

  function highlightCode() {
    Prism.highlightAllUnder(refContainer.current);
  }

  const codeBlock = withHTMLChildren ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <div>{content}</div>
  );

  useEffect(() => {
    highlightCode();
  });

  return (
    <HighlightBlock ref={refContainer}>
      {language ? (
        <pre className={`  language-${language}`}>
          <code className={`  language-${language}`}>{codeBlock}</code>
        </pre>
      ) : (
        codeBlock
      )}
    </HighlightBlock>
  );
};
