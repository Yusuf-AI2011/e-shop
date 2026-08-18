import axios from "axios";

export const GetToken = async (authData) => {
  const response = await axios.post(`/api/auth/login`, authData);
  return response.data;
};
