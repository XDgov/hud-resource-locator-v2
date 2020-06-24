import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  display: block;
  object-fit: cover;
  max-width: 100%;
  height: 100vh;
  width: 100vw;
`;

export default Img;
