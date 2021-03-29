# URL Patterns

To implement a RESTful API.

`/` - Home with Search bar

`/admin` - Admin Dashboard

`/login` - Log In

`/register` - Register Account

`/profile/:uid` - User Profile

`/profile/:uid/:role` - User Profile with Role specified

+ `/profile/:uid/seller` - Seller Profile
+ `/profile/:uid/buyer` - Buyer Profile
+ `/profile/:uid/landlord` - Landlord Profile
+ `/profile/:uid/tenant` - Tenant Profile

`/:type/:location` - Search Result, Sale or Rent

- `/sale/:location` - Search Result of Properties for Sale
- `/rent/:location` - Search Result of Properties for Rent

`/sale/:location/p/:slid` - Property for Sale, comes from Search Result

`/sale/p/:slid` - Property for Sale, not come from Search Result

`/rent/:location/p/:rlid` - Property for Rent, comes from Search Result

`/rent/p/:rlid` - Property for Rent, not come from Search Result

