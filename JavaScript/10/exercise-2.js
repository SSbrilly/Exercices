const order = [
  {
    customer: "Simone",
    location: {
      address: "via Lombardia 666",
      city: "Roma",
    }
  },
];

order.forEach((el) => {
  if (el?.location?.city) {
    console.log(el?.location?.city);
  } else {
    console.log('City is required');
  }
});
