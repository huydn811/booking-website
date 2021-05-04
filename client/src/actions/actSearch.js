import * as TypesSearch from '../constants/ActionTypeTour';

// eslint-disable-next-line import/prefer-default-export
export const actSearchTour = (keyword) => ({
  type: TypesSearch.SEARCH_TOUR,
  keyword,
});
