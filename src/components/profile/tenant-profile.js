import React from "react"

const TenantProfile = (
    {
        openProfile
    }) => {
    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <h2>Tenant Profile</h2>
                </div>
            }
        </>
    )
}


export default TenantProfile