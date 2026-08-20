import axios from "axios";

export const getProducts = async () => {
  const response = axios.get(
    `https://backend.magnateshop.uz/api/products?page=1&limit=10&search=toyota&categoryId=1&isActive=true&minPrice=200000000&maxPrice=600000000&inStock=true&sortBy=id&order=ASC`,
  );
  return response;
};
