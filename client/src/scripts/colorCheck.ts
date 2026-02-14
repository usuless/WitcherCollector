export const colorCheck = (deckName: string) => {
  let color = "";
  switch (deckName) {
    case "Neutralne":
      color = "rgba(203, 213, 225, 0.5)";
      break;
    case "Potwory":
      color = "rgba(153, 27, 27, 0.5)";
      break;
    case "Królestwa Północy":
      color = "rgba(30,64,175,0.5)";
      break;
    case "Scoia'tael":
      color = "rgba(63,98,18,0.5)";
      break;
    case "Nilfgaard":
      color = "rgba(202,138,4,0.5)";
      break;
    case "Skellige":
      color = "rgba(107,33,168,0.5)";
      break;
    default:
      color = "rgba(5, 0, 248, 0.8)";
  }

  return color;
};
