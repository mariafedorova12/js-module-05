'use strict';
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}
const messages = [];
for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1));
}