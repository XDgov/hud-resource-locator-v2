import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';

import FormContainer from 'components/FormContainer';
import GridContainer from 'components/GridContainer';
import ResourceSearchForm from 'components/ResourceSearchForm';
import H1 from 'components/H1';
import messages from './messages';
import styled from 'styled-components';

import Person1Svg from './person-1.svg';
import Person2Svg from './person-2.svg';

const Artwork = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
`;

const BannerHeading = styled(H1)`
  color: #ffffff;
  font-size: 3.5rem;
  margin-top: 0;
`;

const BannerContentContainer = styled.div`
  max-width: 35rem;
`;

const BannerFormContainer = styled(FormContainer)`
  border-color: #747CE6;
`;

const BannerParagraph = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
`;

const BannerSection = styled.section`
  background: #4939D5;
  padding-bottom: 4rem;
  padding-top: 1rem;
`;

const Person1 = styled.img`
  display: block;
  height: auto;
  left: -275px;
  position: absolute;
  top: 90px;
  width: 230px;
`;

const Person2 = styled.img`
  display: block;
  height: auto;
  left: -415px;
  position: absolute;
  width: 220px;
`;

export function Banner(){
  return (
    <BannerSection>
      <GridContainer>
        <Artwork>
          <Person2 src={Person2Svg} />
          <Person1 src={Person1Svg} />
        </Artwork>
        <BannerHeading>
          <FormattedMessage {...messages.bannerHeading} />
        </BannerHeading>
        <BannerContentContainer>
          <BannerParagraph>
            <FormattedMessage {...messages.bannerDescription} />
          </BannerParagraph>
          <div>
            <BannerFormContainer>
              <ResourceSearchForm>
              </ResourceSearchForm>
            </BannerFormContainer>
          </div>
        </BannerContentContainer>
      </GridContainer>
    </BannerSection>
  )
}

export default Banner;