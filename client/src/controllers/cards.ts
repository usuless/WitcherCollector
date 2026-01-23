export const handleGetCards = async () => {
  const url = "http://127.0.0.1:3000/api/cards";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
