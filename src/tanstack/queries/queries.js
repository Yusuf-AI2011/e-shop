import axios from "axios";
import api from "../../services/api";

export const getProducts = async ({ search }) => {
  const response = api.get(
    `products?page=1&&limit=10&inStock=true&sortBy=id&order=ASC&search=${search}`,
  );
  return response;
};
