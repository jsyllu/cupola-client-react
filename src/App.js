import React from "react"
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Helmet} from "react-helmet"
import './App.style.client.css'
import Header from "./common/header"
import Footer from "./common/footer"
import Search from "./components/search/search"
import Property from "./components/property/property"
import AdminBoard from "./components/admin-board/admin-board"
import UserProfile from "./components/profile/user-profile"
import Register from "./components/authentication/register"
import LogIn from "./components/authentication/login"
import SaleSearchResult from "./components/search-result/sale-search-result"
import RentSearchResult from "./components/search-result/rent-search-result"
import UserProfileUpdate from './components/profile/user-profile-update'
import NewPropertyForm from './components/property/new-form/new-property-form'
import NewSaleListingForm from './components/property/new-form/new-sale-listing-form'
import NewRentListingForm from './components/property/new-form/new-rent-listing-form'

function App() {
    return (
        <div className="wrapper">
            <Helmet>
                <title>Cupola</title>
            </Helmet>
            <BrowserRouter>
                <Header />
                <Route path={["/", "/search"]}
                       exact={true}
                       component={Search} />
                <Route path="/admin"
                       exact={true}
                       component={AdminBoard} />
                <Route path="/login"
                       exact={true}
                       component={LogIn} />
                <Route path="/register"
                       exact={true}
                       component={Register} />
                <Route path="/profile"
                       exact={true}
                       component={UserProfile} />
                <Route path="/profile/update"
                       exact={true}
                       component={UserProfileUpdate} />
                <Route path="/profile/property/:type/new"
                       exact={true}
                       component={NewPropertyForm} />
                <Route path={["/profile/sale/new","/profile/sale/:lid"]}
                       exact={true}
                       component={NewSaleListingForm} />
                <Route path={["/profile/rent/new","/profile/rent/:lid"]}
                       exact={true}
                       component={NewRentListingForm} />
                <Route path="/sale/:location"
                       exact={true}
                       component={SaleSearchResult} />
                <Route path="/rent/:location"
                       exact={true}
                       component={RentSearchResult} />
                <Route path={[
                    "/:type/:location/p/:lid",
                    "/:type/p/:lid"
                ]}
                       exact={true}
                       component={Property} />
                <div className="push"></div>
               <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
