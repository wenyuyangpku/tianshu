import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export const Editor: FunctionComponent<Props> = ({ value }: Props) => {
  return (
    <MonacoEditor
      height={'600px'}
      language="typescript"
      theme="vs-dark"
      value={value}
      onChange={console.log}
    />
  );
};

interface Props {
  value: string;
}
