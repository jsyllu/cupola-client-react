# Database Design

Last Modification: 2/8/2021 by Jess

## Detail Page

(Note: **queryable** means this input could be passed into search to filter results)

### fetch from APIs

+ Property Images
+ Property Location ("xxx street, city, state zip" / coordinates) - **queryable** 
+ Property Floor Plan (3beds, 2baths) - **queryable**
+ Property Type (Apartment / Condo / House ...) - **queryable**
+ Property Size (in sqft/sqm)
+ Property Interior Details ( No. of Rooms / Basement / Appliances & utilities / Heating & AC / Gas & Electric / Flooring)
+ Property Exterior Details (Parking & Garage / Roof & Patio & Fencing)
+ Property's Days on Market (how long has this property been posted for sale)
+ Property Info (Year Built)
+ 
+  **Buy & Sale ONLY**
  + Property Price ($750,000) - **queryable**
  + Property Price History (historical transaction dates and prices) 
+ **Rent ONLY**
  + Monthly Rental ($2500) - **queryable**
  + Security Deposits (1 month of rent)
  + Other Deposits (keys...)
  + Date Available (9/1/2021)
  + Lease Duration (1 year)
  + Lease Term (Fixed Term / Month-to-month, no end date)
  + Occupancy Limit (2 persons)
  + Animal Friendly (true/false)
  + Tenant Limitation (e.g., no undergrad)

#### Neighborhood

+ Street View & Map, powered by <u>Google Maps API</u>
+ School Map, powered by <u>LocalSchoolDirectory API</u> or <u>GreatSchools.org API</u>

+ Crime Map, powered by <u>CrimeoMeter Crime Data API</u>
+ Shop & Eat, powered by <u>Yelp Fusion API</u>

### fetch from Local Server/DB

+ No. of Bids/Applications are submitted to this property listing
+ No. of "Interested" for this listing

## User Profile Pag, local server/db

+ Full Name
+ Phone
+ Email
+ **Owner** 
  - Certificate of Property Ownership
  - Expected Price for Sale / monthly Rent
  - No. of users marked "Interested" for your released listing
  - No. of Bids/Applications you received for a listing
+ **Buyer / Renter**
  + Occupation
  + Excepted Price for Sale / monthly Rent
  + Sale Bid / Rental Application Records that you submitted (Stage: submitted - Reviewed - Accepted/Declined)
  + My list of "Interested" listings (sales / rental)