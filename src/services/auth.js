import apiInstance from "services";

export const login = async (email, password) => {
  try {
    const response = await apiInstance.post("/login", {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error) {
    console.error(error);
  }
};
