import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 5000 : 5000;

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;


async function getUsers() {
  const url = `${baseURLApi}/users`;
  return await axios.get(url);
}

async function getUser(id) {
  const url = `${baseURLApi}/users/id`;
  return await axios.post(url, id).then(response => response.data);
}

async function createUser(data)
{
  const url = `${baseURLApi}/users`;
  return await axios.post(url, data).then(response => response.data);
}
async function login(data)
{
  const url = `${baseURLApi}/users/login`;
  return await axios.post(url, data, {'Content-Type': 'application/json'}).then(response => response.data);
}
async function signUp(data)
{
  const url = `${baseURLApi}/users/signup`;
  return await axios.post(url, data, {'Content-Type': 'application/json'}).then(response => response.data);
}
async function getMarkets() {
  const url = `${baseURLApi}/places`;
  return await axios.get(url);
}
async function getMarket(id) {
  const url = `${baseURLApi}/places/${id}`;
  return await axios.get(url).then(response => response.data);
}

async function addToCart(id,pid,productName,productPrice,productImg) {
  const url = `${baseURLApi}/orders`;
  return await axios.post(`${url}/addToCart`,
  {"userId":id,
  "productId": pid,
  "productName":productName,
   "productPrice":productPrice,
  "productImg":productImg})
      .then(response => response.data);

}

async function getCartInfo(id){
  const url = `${baseURLApi}/orders`;
  return await axios.get(`${url}/userCartInfo/${id}`)
  .then(response => response.data);
}

 function removeFromCart(data){
  const url = `${baseURLApi}/orders`;
  return  axios.post(`${url}/removeFromCart`,data,
  {'Content-Type': 'application/json'})
  .then(response=> response.data);
}

async function makePayment(data){
  const url = `${baseURLApi}/orders`;
  return await axios.post(`${url}/makepayment`, data)
}
async function getFeedbacks() {
  const url = `${baseURLApi}/feedback`;
  return await axios.get(url).then(response => response.data);
}
async function makeFeedback(data){
  const url = `${baseURLApi}/feedback`;
  return await axios.post(`${url}`, data)
}
async function getFeedbackbyUserId(id) {
  const url = `${baseURLApi}/feedback/${id}`;
  return await axios.get(url).then(response => response.data);
}
function removeMyFeedback(data){
  const url = `${baseURLApi}/feedback`;
  return  axios.post(`${url}/delete`,data,
  {'Content-Type': 'application/json'})
  .then(response=> response.data);
}
async function getReservations() {
  const url = `${baseURLApi}/reservations`;
  return await axios.get(url);
}
async function getReservation(id) {
  const url = `${baseURLApi}/reservations/${id}`;
  return await axios.get(url).then(response => response.data);
}
async function makeReservation(data){
  const url = `${baseURLApi}/reservations`;
  return await axios.post(`${url}`, data)
}
function removeReservation(data){
  const url = `${baseURLApi}/reservations`;
  return  axios.post(`${url}/removeFromCart`,data,
  {'Content-Type': 'application/json'})
  .then(response=> response.data);
}

async function getProducts() {
  const url = `${baseURLApi}/products`;
  return await axios.get(url);
}
async function getProduct(id) {
  const url = `${baseURLApi}/products/${id}`;
  return await axios.get(url).then(response => response.data);
}
async function getReservationByMArketName(marketName) {
  const url = `${baseURLApi}/reservations/marketname/${marketName}`;
  return await axios.get(url).then(response => response.data);
}
export {
  login,
  getUsers,
  getUser,
  createUser,
  addToCart,
  getCartInfo,
  removeFromCart,
  getMarkets,
  getMarket,
  signUp,
  makePayment,
  getFeedbacks,
  makeFeedback,
  getFeedbackbyUserId,
  removeMyFeedback,
  getReservations,
  getReservation,
  makeReservation,
  removeReservation,
  getProducts,
  getProduct,
  getReservationByMArketName
};