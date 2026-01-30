const BASIC_URL = "http://127.0.0.1:3000/api/cards";

export const handleGetCards = async () => {
  try {
    const response = await fetch(BASIC_URL);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const handlePutCards = async (cardId: number, userId: number) => {
  try {
    const response = await fetch(BASIC_URL + "/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        cardId: cardId,
      }),
    });

    if (!response.ok) {
      console.error("Błąd serwera");
    }
    const data = await response.json();
    console.log("Sukces:", data.message);
  } catch (error) {
    console.error("Błąd sieci:", error);
  }
};

export const handleGetAcquiredCards = async (userId: number) => {
  try {
    const response = await fetch(BASIC_URL + "/" + userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Number,
      }),
    });

    if (!response.ok) {
      console.error("Coś poszło nie tak");
    }

    const data = await response.json();

    console.log(data.message);
    return data;
  } catch (error) {
    console.error(error);
  }
};
