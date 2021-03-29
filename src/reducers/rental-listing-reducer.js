const initialState = {
    rentalListing : []
};

const rentalListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_PROPERTIES_FOR_RENT":
            return {
                rentalListing : action.listings
            }
        default:
            return state
    }
}

export default rentalListingReducer