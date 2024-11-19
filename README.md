# Online Shopping Management

<h2 align="left">Introduction:</h2>

Through an e-commerce platform, the complete Online Shopping Management System lets consumers search, purchase, and arrange products. Managers of systems and store managers also handle consumer orders, inventory, and product listings thanks to the system. Covering user accounts, product management, cart functionality, order processing, backend components required for a completely operating online shopping experience, this library

<h2 align="left"> Key Features:</h2>

1. **User Management**
    - Users could log in, register, and change their profile.
    - Order and product control call for managers of retailers as well as others.
    - Safe login for every user applying roles-based access control.
2. **Product Management**
    - Store managers using product management can add, change, and remove items.
    - Main categories and subcategories easily enable one browse items.
    - Store managers set price and supply levels.
3. **Cart and Order Management**
    - Placing orders, adjusting amounts, and adding items to their cart allows users to manage **cart and order**.
    - One can follow directions using a tracking number assigned specifically.
    - Payment information is securely handled with choices for home delivery.
4. **Watchlist Functionality**
    - Users having **watchlist** ability can add items to a list for next purchases.
    - For watchlist items, availability, cost, and discount monitoring five.
5. **Review and Rating System**
    - Users of bought products could give ratings and comments.
<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)


<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

### **Library:**

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

<h2 align="left"> 1. Database Structure</h2>

The platform will require a relational database to manage Users,Storemanager,Product,Cart,PlaceOrder,Watchlist,Comment and Category . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) **Users**

| **Field Name** | **Type** |
| --- | --- |
| username | String |
| email | String |
| password | password |
| contactno | number |
| gender | String |

### b) Storemanager

| **Field Name** | **Type** |
| --- | --- |
| title | String |
| username | String |
| email | String |
| password | timestamp |
| RePassword | timestamp |
| Admin | Ref. Object → Users |

### c) Product

| **Field Name** | **Type** |
| --- | --- |
| description | String |
| maincategory | String |
| subcategory | String |
| price | Number |
| stockmanagerid | Ref. Object → stockmanager |
| quantity | Number |
| image | String |

### d) Cart

| **Field Name** | **Type** |
| --- | --- |
| Product_ID | Ref. Object → Product |
| User_ID | Ref. Object → Users |
| Quntity | String |
| Price | String |

### e) **placeorder**

| **Field Name** | **Type** |
| --- | --- |
| fullname | String |
| email | String |
| address | String |
| state | String |
| postalCode | String |
| contactNo | String |
| TrackingNum | String |
| TotalCost | String |
| deliverHome | String |
| cardNumber | String |
| cvv | String |
| expireDate | String |

### f) **watchlist**

| **Field Name** | **Type** |
| --- | --- |
| userID | Ref. Object → Users |
| counter | Number |
| avaliable | Number |
| productID | Ref. Object → Product |
| price | Number |
| name | String |
| image | String |
| discount | Number |

### g) Comments

| **Field Name** | **Type** |
| --- | --- |
| username | String |
| productId | Ref. Object → Product |
| Comment | String |
| rate | Number |

### h) **category**

| **Field Name** | **Type** |
| --- | --- |
| Category Name | String |
| Main Category | String |
| Admin | String |

<h2 align="left"> Modules and Components:</h2>

### 1. **User Module**

- CRUD utilities help to maintain user profiles by means of account building, login, and contact information updating.
- In companies, role-based access control benefits common users, managers, and supervisors.

### 2. **Store Manager Module**

- Store managers change and eliminate from inventory access some particular products.
- Pricing, inventory control, classification, and allocating are among the aspects of product management.
- Simple figures direct supply control.

### 3. **Product Module**

- Products fall into more basic access into key categories and subclasses.
- Every great gives specifics on picture, price, quantity, and description.
- search and filter tools guiding consumers to purchase items.

### 4. **Cart Module**

- Users can see cart statistics, change quantities, add items to their cart.
- The next is: The cart module calculates the overall cost based on volume and product pricing.

### 5. **Order Module (Place Order)**

- Ordering users might use their payment and delivery information.
- Following client created codes helps them to verify their orders.
- Orders allow approximations of total cost and delivery choices.

### 6. **Watchlist Module**

- Users can make a watchlist with products they might like to purchase.
- One could argue as follows concerning track availability, price, and discounts for watchlist items.

### 7. **Comments and Ratings Module**

- Users can note and label purchased items.
- Every good has ratings meant for use by other consumers.

### 8. **Category Management**

- Usually in terms of categorization, products fall into broad categories and subcategories.
- Product category managers then distribute items under administrator supervision.

<h2 align="left">Development with ZenDevX:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>



<h2 align="left">🐦 Connect with me:</h2>
         
 
<p align="left">

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>
</p>
I hope you like the project. Thanks for reading :)
