const URL = "https://zillow-com1.p.rapidapi.com/";
const API_KEY = "0f59bd6c3bmshd027bd61f224217p1a7607jsnd46c33feebe7";
const API_HOST = "zillow-com1.p.rapidapi.com";

/**
 * construct the endpoint url
 * @param {String} endpoint 
 * @param {Object} params 
 * @returns 
 */
 const getEndPointHelper = (endpoint, params) => {
    let endPoint = URL + `/${endpoint}?`;

    for (const prop in params) {
        endPoint += `${prop}=${params[prop]}&`;
    }
    endPoint = endPoint.slice(0, -1); // remove the last &
    return endPoint;
}
/**
 * get property based on the parameters
 * required parameters: location - Location details, address or ZIP code.
 * reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
 * @param {Object} params 
 */
const getPropertyByFilters = async (params) => {
    const endPoint = getEndPointHelper("propertyExtendedSearch", params);

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
/**
 * get property details based on the id of the property
 * required parameters: zpid - number
 * @param {Object} params 
 */
const getPropertyDetail = async (params) => {
    let endPoint = getEndPointHelper("property", params);

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    });    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // response.json()
    // .then(d => console.log(d));
    return response.json();
};
/**
 * get iamges of a property based on the id of the property
 * required parameters: zpid - number
 * @param {Object} params 
 */
const getPropertyImages = async (params) => {
    let endPoint = getEndPointHelper("images", params);

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    });    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

const zillowService = {
    getPropertyByFilters, getPropertyDetail, getPropertyImages
};

export default zillowService;



