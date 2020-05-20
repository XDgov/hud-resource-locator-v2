/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'hrl.containers.HomePage';

export default defineMessages({
  bannerDescription: {
    id: `${scope}.banner.description`,
    defaultMessage: 'Use the housing assitance form below to search for housing assitance wherever you’d like: in your zip code, city, or across the country.'
  },
  bannerHeading: {
    id: `${scope}.banner.heading`,
    defaultMessage: 'Find Affordable Housing',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
