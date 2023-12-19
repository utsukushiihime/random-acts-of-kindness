import styled from 'styled-components';
import Head from 'next/head';
import KindnessGenerator from '../components/KindnessGenerator';
import { actsOfKindness } from '../actsOfKindness';
import { Analytics } from '@vercel/analytics/react';

const Title = styled.h1`
  color: red;
  font-size: 24px;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Random Acts of Kindness Generator</title>
          <meta name="description" content="Generate random acts of kindness for the holiday season" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Title>Random Acts of Kindness Generator</Title>
          <KindnessGenerator actsOfKindness={ actsOfKindness } />

        </main>
      </div>
      <Analytics />
    </>
  );
}