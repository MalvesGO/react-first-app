import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositorio" />
        <SubmitButton disable>
          <FaPlus color="#FFF" size="14px" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
