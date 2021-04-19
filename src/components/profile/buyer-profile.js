import React from "react"

const BuyerProfile = (
    {
        openProfile
    }) => {
    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <h2>Buyer Profile</h2>
                </div>
            }
        </>
    )
}


export default BuyerProfile