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

export const handlePutCards = async (cardId: number, userId: number) => {
  try {
    const response = await fetch("http://localhost:3000/cards/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        cardId: cardId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Sukces:", data.message);
      alert("Karta dodana do Twojej kolekcji!");
    } else {
      console.error("Błąd serwera");
    }
  } catch (error) {
    console.error("Błąd sieci:", error);
  }
};
