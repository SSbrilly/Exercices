const order = {
  customer: 'Simone',
  address: 'via Lombardia 666',
  city: 'Rome',
};

if (
  order &&
  order.customer &&
  order.address &&
  !order.city
) {
  console.log("City is required");
} else {
  console.log(order.city);
}
