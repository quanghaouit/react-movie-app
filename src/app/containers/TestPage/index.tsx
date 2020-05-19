import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function TestPage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Movie app" />
      </Helmet>
      <span>test page</span>
    </>
  );
}
