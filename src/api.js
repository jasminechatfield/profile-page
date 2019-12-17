import axios from "axios";

const baseURL = "https://api.noopschallenge.com/hexbot";

export const getRandomColorHex = async () => {
  let { data } = await axios.get(baseURL);
  return data.colors[0].value;
};
