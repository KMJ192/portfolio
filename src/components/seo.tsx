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
        href='https://fonts.googleapis.com/css2?family=Exo:wght@500&family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
        rel='stylesheet'
      />

      {children}
    </>
  );
}

export default Seo;
