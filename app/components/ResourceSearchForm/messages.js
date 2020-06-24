import { defineMessages } from 'react-intl';

export const scope = 'hrl.components.ResourceSearchForm';

export default defineMessages({
  geoInputLabel: {
    id: `${scope}.geoInputLabel`,
    defaultMessage: '2. Where would you like to look for housing assistance?'
  },
  resourceInputLabel: {
    id: `${scope}.resourceInputLabel`,
    defaultMessage: '1. What type of housing assitance are you looking for?'
  },
  resourceLabelHousing: {
    id: `${scope}.resourceType.housing`,
    defaultMessage: 'Affordable Housing'
  },
  resourceLabelShelter: {
    id: `${scope}.resourceType.shelter`,
    defaultMessage: 'Homeless Shelter'
  },
  submitValue: {
    id: `${scope}.submitValue`,
    defaultMessage: 'Search for housing assitance'
  },
});
