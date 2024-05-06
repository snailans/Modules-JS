// Специализация поваров
const chefsSpecialization = new Map([
  ["Виктор", "Пицца"],
  ["Ольга", "Суши"],
  ["Дмитрий", "Десерты"],
]);

const dishesAndChefs = new Map([
  ["Пицца Маргарита", "Виктор"],
  ["Пицца Пепперони", "Виктор"],
  ["Суши Филадельфия", "Ольга"],
  ["Суши Калифорния", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

const orders = new Map();

function addOrder(client, dish) {
  if (!orders.has(client)) {
    orders.set(client, [dish]);
  } else {
    const clientOrders = orders.get(client);
    clientOrders.push(dish);
    orders.set(client, clientOrders);
  }
}

// Заказы клиентов
addOrder({ name: "Алексей" }, "Пицца Пепперони");
addOrder({ name: "Алексей" }, "Тирамису");

addOrder({ name: "Мария" }, "Суши Калифорния");
addOrder({ name: "Мария" }, "Пицца Маргарита");

addOrder({ name: "Ирина" }, "Чизкейк");

console.log("Специализация поваров:");
chefsSpecialization.forEach((specialization, chef) => {
  console.log(`${chef}: ${specialization}`);
});

console.log("\nБлюда и их повара:");
dishesAndChefs.forEach((chef, dish) => {
  console.log(`${dish}: ${chef}`);
});

console.log("\nЗаказы клиентов:");
orders.forEach((clientOrders, client) => {
  console.log(`Заказы клиента ${client.name}:`);
  clientOrders.forEach((order) => {
    console.log(`- ${order}`);
  });
});