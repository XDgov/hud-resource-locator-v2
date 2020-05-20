import styled from 'styled-components';

const GridContainer = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  overflow: hidden;

  @media(min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default GridContainer;
