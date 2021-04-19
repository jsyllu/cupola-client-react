import React from "react"

const LandlordProfile = (
    {
        openProfile
    }) => {
    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <h2>Landlord Profile</h2>
                </div>
            }
        </>
    )
}


export default LandlordProfile