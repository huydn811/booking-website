import * as TypesSearch from "../constants/ActionTypeTour";
export const actSearchTour = (keyword) => {
    return {
        type : TypesSearch.SEARCH_TOUR,
        keyword
    }
}