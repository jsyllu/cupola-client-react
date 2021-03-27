import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {useParams} from "react-router-dom"
import SellerProfile from "./seller-profile"
import BuyerProfile from "./buyer-profile"
import LandlordProfile from "./landlord-profile"
import TenantProfile from "./tenant-profile"
import capitalize from "../../util/functions"


const UserProfile = () => {
    const SELLER = "seller"
    const BUYER = "buyer"
    const LANDLORD = "landlord"
    const TENANT = "tenant"

    const {role} = useParams()
    const [validRole, setValidRole] = useState(false)

    useEffect(() => {
        if (role === "undefined" || typeof role === "undefined") {
            setValidRole(false)
        } else {
            setValidRole(true)
        }
    }, [role])

    return (
        <>
            <Helmet>
                <title>{`${validRole ? capitalize(role) : "" }`} Profile | Cupola</title>
            </Helmet>

            <div className="user-profile container">
                <h1>This is user profile</h1>
                {
                    validRole &&
                    (() => {
                        switch (role.toLowerCase()) {
                            case SELLER:
                                return (
                                    <SellerProfile />
                                )
                            case BUYER:
                                return (
                                    <BuyerProfile />
                                )
                            case LANDLORD:
                                return (
                                    <LandlordProfile />
                                )
                            case TENANT:
                                return (
                                    <TenantProfile />
                                )
                            default:
                                return (
                                    <></>
                                )
                        }
                    })()
                }
            </div>
        </>
    )
}

export default UserProfile