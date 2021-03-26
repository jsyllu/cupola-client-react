import './App.style.client.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Helmet} from "react-helmet"
import Header from "./common/header"
import Footer from "./common/footer"
import Search from "./components/search/search"
import SearchResult from "./components/search-result/search-result"
import Property from "./components/property/property"

function App() {
    return (
        <div className="container">
            <Helmet>
                <title>Cupola</title>
            </Helmet>
            <BrowserRouter>
                <Header />
                <Route path="/"
                       exact={true}
                       component={Search} />
                <Route path="/:type/:location"
                       exact={true}
                       component={SearchResult} />
                <Route path={[
                    "/sale/:location/p/:slid",
                    "/rent/:location/p/:rlid",
                    "/sale/p/:slid",
                    "/rent/p/:rlid",
                ]}
                       exact={true}
                       component={Property} />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
