import axios from 'axios'

export default() => {
  return axios.create({
    //baseURL: `http://localhost:50286/api/weather/forecasts`,
    //baseURL: `https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22`,
    //baseURL: `http://api.coindesk.com/v1/bpi/currentprice.json`,
    baseURL: `https://portaldevapi.essilorusa.com/api/registration/labs`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      //'Access-Control-Allow-Origin': '*'
    }
  })
}
