function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  const productToAdd = cart.find((p) => p.id === product.id);
  const currentQuantity = productToAdd ? productToAdd.quantity : 0;
  const newQuantity = currentQuantity + quantity;

  if (newQuantity > product.stock || quantity === 0) {
    throw new RangeError;
  }

  if (productToAdd) {
    return cart.map((p) =>
        p.id === product.id ? { ...p, quantity: newQuantity } : p
    );
  }

  return [...cart, { ...product, quantity}];
}

function changeQuantity(cart, productId, quantity) {
  const product = cart.find((p) => p.id === productId);

  if (!product) return cart;

  if (quantity <= 0 || quantity > product.stock) throw new RangeError();

  return cart.map((p) => p.id === productId ? {...p, quantity: quantity } : p);
}

function removeFromCart(cart, productId) {
  return cart.filter((p) => p.id !== productId);
}

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
