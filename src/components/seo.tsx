import React, { type ReactNode } from 'react';

type Props = {
  description: string;
  children: ReactNode;
};

function Seo({ description, children }: Props) {
  return (
    <>
      <title>김명준 포트폴리오</title>
      <meta name={description} />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Exo:wght@500&family=Lilita+One&display=swap'
        rel='stylesheet'
      />

      {children}
    </>
  );
}

export default Seo;
