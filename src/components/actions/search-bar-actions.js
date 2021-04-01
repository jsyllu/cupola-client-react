export const UPDATE_SEARCH_TYPE = "UPDATE_SEARCH_TYPE"
export const UPDATE_SEARCH_INPUT = "UPDATE_SEARCH_INPUT"

export const updateSearchType = (dispatch, newType) => {
    dispatch({
        type: UPDATE_SEARCH_TYPE,
        searchType: newType
    })
}
export const updateSearchInput = (dispatch, newInput) => {
    dispatch({
        type: UPDATE_SEARCH_INPUT,
        searchInput: newInput
    })
}

export const validateSearchInput = (searchInput) => {
    return searchInput.length >= 3
}

const searchBarActions = {
    updateSearchType, updateSearchInput, validateSearchInput
}

export default searchBarActions