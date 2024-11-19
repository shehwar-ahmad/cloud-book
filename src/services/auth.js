import apiInstance from "services";

export const login = async (email, password) => {
  try {
    const response = await apiInstance.post("/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await apiInstance.post("/register", {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
