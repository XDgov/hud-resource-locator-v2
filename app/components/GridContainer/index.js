import styled from 'styled-components';

const GridContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 15px;
  position: relative;
  width: 100%;

  @media(min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default GridContainer;
