const products = [
{ name: "Laptop", price: 1200, category: "Electronics", inStock: true },
{ name: "Desk Chair", price: 180, category: "Furniture", inStock: true },
{ name: "Monitor", price: 300, category: "Electronics", inStock: false },
{ name: "Bookshelf", price: 95, category: "Furniture", inStock: true },
{ name: "Headphones", price: 150, category: "Electronics", inStock: true },
{ name: "Desk Lamp", price: 40, category: "Furniture", inStock: false },
];

const outofStockItems = products.filter((product) => product.inStock === false);
console.log(outofStockItems.map((product) => product.price));

const stockLabels = products.map(
  (product) => `${product.price}: ${product.inStock ? "OK" : "Low Stock"}`
);
console.log(stockLabels);

const totalValue = products.reduce(
  (total, product) =>
    product.inStock ? total + product.price * (product.quantity || 1) : total,
  0
);

console.log(totalValue);

if(totalValue<1000){
    console.log("Reorder needed");
}
else{
    console.log("Inventory healthy");
}

const restocklist = products
  .filter((product) => !product.inStock)
  .map((product) => `${product.name} (Low Stock)`);
console.log(restocklist);