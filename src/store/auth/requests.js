import axios from "../../api/axios";

export const requestRegister = async (data) => {
  return await axios.post("/auth/register", {
    ...data,
  });
};
export const requestLogin = async (data) => {
  return await axios.post("/auth/login", {
    ...data,
  });
};
export const requestFetchMe = async (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthRefreshToken = async (token) => {
  if (!token) return;
  return await axios.post("/token", {
    refreshToken: token,
  });
};
