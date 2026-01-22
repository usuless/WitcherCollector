export const handleRegister = async (
  login: string,
  password: string,
  mail: string,
) => {
  const url = "http://127.0.0.1:3000/";
  try {
    const response = await fetch(url + "auth/register", {
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
  const url = "http://127.0.0.1:3000/";
  try {
    const response = await fetch(url + "auth/login", {
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
    console.log(result);
  } catch (error) {}
};
