import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;

  @media(min-width: 1200px) {
    padding: 0 2rem;
  }
`;

export default FlexContainer;
