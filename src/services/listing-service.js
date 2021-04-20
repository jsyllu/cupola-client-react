const SERVER_URL = process.env.REACT_APP_SERVER_URL
// const SERVER_URL = 'http://localhost:3001'

const findListingById = (type, lid) =>
    fetch(`${SERVER_URL}/${type}/p/${lid}`)
        .then(res => res.json())
        .catch(err => console.log(err))

const findSaleListings = (location) =>
    fetch(`${SERVER_URL}/sale/${location}`)
        .then(res => res.json())
        .catch(err => console.log(err))

const findRentalListings = (location) =>
    fetch(`${SERVER_URL}/rent/${location}`)
        .then(res => res.json())
        .catch(err => console.log(err))

const createProperty = (property) =>
    fetch(`${SERVER_URL}/property/new`, {
        method: 'POST',
        body: JSON.stringify(property),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const createSaleListing = (listing) =>
    fetch(`${SERVER_URL}/sale/new`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const createRentalListing = (listing) =>
    fetch(`${SERVER_URL}/rent/new`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const listingService = {
    findListingById, findSaleListings, findRentalListings, createProperty,
    createSaleListing, createRentalListing
}

export default listingService