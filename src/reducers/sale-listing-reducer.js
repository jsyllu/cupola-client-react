const initialState = {
    saleListing : []
};

const saleListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_PROPERTIES_FOR_SALE":
            return {
                saleListing : action.listings
            }
        default:
            return state
    }
}

export default saleListingReducer