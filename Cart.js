// import React from "react";

// const Cart = ({ cart, removeFromCart }) => {
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${totalPrice.toFixed(2)}</p>
//     </div>
//   );
// };

// export default Cart;


import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, curr) => acc + curr.price, 0)
      : 0;

  const formattedPrice =
    typeof totalPrice === "number" ? totalPrice.toFixed(2) : "N/A";

  return (
    <>
      <h1>Cart</h1>
      {!cartItems || cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.qty}</span>
                <span>{item.price}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: {formattedPrice}</h2>
        </>
      )}
    </>
  );
};

export default Cart;


