# Online-Shopping
Online Shopping Management
<h2 align="left">Introduction:</h2>

The Online Shopping Management System is a comprehensive platform that enables users to browse, purchase, and manage products through an e-commerce platform. The system also allows administrators and store managers to handle product listings, inventory, and customer orders. This repository includes the backend components necessary for a fully functional online shopping experience, handling user accounts, product management, cart functionality, and order processing.

<h2 align="left"> Key Features:</h2>

1. **User Management**
    - Users can create accounts, log in, and update their profile.
    - Store managers and admins have  roles for managing products and orders.
    - Secure authentication for all users, with roles-based access control.
2. **Product Management**
    - Store managers can add, update, and delete products.
    - Products are categorized by main category and subcategory for easy browsing.
    - Stock levels and pricing are managed by store managers.
3. **Cart and Order Management**
    - Users can add products to their cart, update quantities, and place orders.
    - Orders can be tracked with a unique tracking number.
    - Payment details are securely processed, with options for home delivery.
4. **Watchlist Functionality**
    - Users can add products to a watchlist for future purchases.
    - Availability, pricing, and discount tracking for watchlist items.
5. **Review and Rating System**
    - Users can leave comments and ratings on products they have purchased..

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

The platform will require a relational database to manage User And Tasks . Below is a proposed database structure with the key tables.

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

- CRUD functionality for managing user profiles, including account creation, login, and updating contact information.
- Role-based access control for regular users, store managers, and admins.

### 2. **Store Manager Module**

- Store managers have access to add, update, and remove products from inventory.
- Product management includes assigning categories, pricing, and stock levels.
- Inventory management for tracking available quantities.

### 3. **Product Module**

- Products are organized into main categories and subcategories for easier navigation.
- Each product has details like description, price, quantity, and image.
- Filtering and search functionality to help users find products.

### 4. **Cart Module**

- Users can add products to their cart, view cart details, and update quantities.
- The cart module calculates the total cost based on product prices and quantities.

### 5. **Order Module (Place Order)**

- Users can place orders with their delivery details and payment information.
- Tracking numbers are generated for users to track their orders.
- Orders include delivery options and total cost calculations.

### 6. **Watchlist Module**

- Users can add products to a watchlist for future purchases.
- Track availability, pricing, and discounts for watchlist items.

### 7. **Comments and Ratings Module**

- Users can leave reviews and rate products they have purchased.
- Ratings are displayed for each product to help guide other customers.

### 8. **Category Management**

- Products are categorized into main categories and subcategories for organization.
- Admins can manage product categories and assign products accordingly.

<h2 align="left">Development with ZenDevX:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>



<h2 align="left">🐦 Connect with me:</h2>
         
 
<p align="left">

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="#" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>
</p>
I hope you like the project. Thanks for reading :)
