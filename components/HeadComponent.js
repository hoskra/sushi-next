import React from "react";
import Head from 'next/head'

export default function HeadComponent(props) {

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/sushi.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};