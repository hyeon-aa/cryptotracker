import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
   const response =  await axios.get(`${BASE_URL}/coins`)
   return response.data.slice(0,5);
}