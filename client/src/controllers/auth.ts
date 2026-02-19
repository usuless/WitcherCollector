const BASIC_URL = "http://127.0.0.1:3000/auth/";

export const handleRegister = async (
  login: string,
  password: string,
  mail: string,
) => {
  try {
    const response = await fetch(BASIC_URL + "register", {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password,
        mail: mail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response Status ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {}
};

export const handleLogin = async (login: string, password: string) => {
  try {
    const response = await fetch(BASIC_URL + "login", {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response Status ${response.status}`);
    }
    const result = await response.json();
    localStorage.setItem("userId", result.userId);
    localStorage.setItem("token", result.token);
  } catch (error) {}
};

export const isLoggedIn = async (token: string) => {
  try {
    const response = await fetch(BASIC_URL + "logincheck", {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
