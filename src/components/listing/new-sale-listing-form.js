import React, {useState} from 'react'

const NewSaleListingForm = (
    {
        pid,
        createNewSaleListing
    }) => {

    const [listing, setListing] = useState({
        'pid': pid,
        'currency': 'USD',
        'ownership': false
    })


    return (
        <div className="new-property-form">
            <form action="">
                <h2 className="text-center">
                    Create Sale Listing
                </h2>
                <hr />
                <div className="form-group">
                    <label htmlFor="inputPrice">
                        Price ($)
                    </label>
                    <input className="form-control"
                           id="inputPrice"
                           type="number"
                           placeholder="750,000"
                           onChange={(e) => setListing(
                               {...listing, price: e.target.value})}
                           required />
                </div>
                <div className="form-group">
                    <label htmlFor="inputOwnership">
                        I certify I own this property and have the right to sell it.
                    </label>
                    <input className="form-control"
                           id="inputOwnership"
                           type="checkbox"
                           onClick={() => setListing(
                               {...listing, ownership: !listing.ownership})}
                           required />
                </div>
                <button onClick={() => createNewSaleListing(listing)}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default NewSaleListingForm