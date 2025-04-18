import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: 10px 0 0 0;
  }
`;

export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
