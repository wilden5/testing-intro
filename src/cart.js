function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  const productToAdd = cart.find((p) => p.id === product.id);
  const currentQuantity = productToAdd ? productToAdd.quantity : 0;
  const newQuantity = currentQuantity + quantity;


  if (newQuantity > product.stock) {
    throw new RangeError;
  }

  if (quantity === 0) {
    throw new RangeError;
  }

  if (productToAdd) {
    return cart.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
  }

  return [...cart, { ...product, quantity}];
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
