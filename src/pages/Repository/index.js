import React from 'react';
import { decode } from 'iconv-lite';

// import { Container } from './styles';

export default function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
