import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';

import FormContainer from 'components/FormContainer';
import GridContainer from 'components/GridContainer';
import ResourceSearchForm from 'components/ResourceSearchForm';
import H1 from 'components/H1';
import messages from './messages';
import styled from 'styled-components';

const BannerHeading = styled(H1)`
  color: #ffffff;
  font-size: 3.75rem;
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
`;

export function Banner(){
  return (
    <BannerSection>
      <GridContainer>
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