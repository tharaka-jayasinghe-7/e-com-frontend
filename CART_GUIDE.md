# Cart Functionality - Beginner Guide

This is a cart implementation that's perfect for beginners to understand. Let me explain each part:

## How It Works

### 1. **CartContext.jsx** - The "Shopping Bag"

Think of this as a shared shopping bag that everyone in your app can access:

- It stores all cart items in an array
- It has functions like `addToCart`, `removeFromCart`, etc.
- Any component can access these functions

### 2. **Cart.jsx** - The Cart Icon & Dropdown

This is the cart icon you see in the header:

- Shows number of items in a red badge
- When clicked, shows a dropdown with cart items
- Has buttons to add/remove items

### 3. **CartPage.jsx** - Full Cart Page

This is a complete page showing all cart items:

- Shows each item with image, name, price
- Has buttons to change quantity or remove items
- Shows total price

### 4. **ProductCard.jsx** - Add to Cart Button

Each product card has an "Add to Cart" button:

- When clicked, it adds the product to our shared cart
- Shows an alert message

## Key Concepts for Beginners

### State Management

```javascript
const [cartItems, setCartItems] = useState([]);
```

This creates a variable `cartItems` that holds our cart data. When we change it, React automatically updates the UI.

### Adding to Cart

```javascript
const addToCart = (product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    // Product already in cart - increase quantity
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    // New product - add to cart
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};
```

### Context (Sharing Data)

React Context lets us share data between components without passing props everywhere:

1. We create a context (like a shared box)
2. We wrap our app with a Provider (gives everyone access to the box)
3. Components use `useContext` to get data from the box

## File Structure

```
src/
├── CartContext.jsx           # Shared cart data and functions
├── components/
│   └── Cart.jsx              # Cart dropdown in header
├── pages/
│   └── CartPage.jsx          # Full cart page
└── components/ui/
    └── ProductCard.jsx       # Product with add to cart button
```

## How to Test

1. Go to the home page or products page
2. Click "Add to Cart" on any product
3. See the cart icon update with a number badge
4. Click the cart icon to see the dropdown
5. Click "View Cart" to go to the full cart page
6. Try changing quantities or removing items

## What You've Learned

- **State Management**: Using `useState` to store data
- **Context**: Sharing data between components
- **Event Handling**: Button clicks and form interactions
- **Conditional Rendering**: Showing different content based on data
- **Array Methods**: Using `map`, `filter`, `find`, and `reduce`

This is a foundation that you can build upon as you learn more!
