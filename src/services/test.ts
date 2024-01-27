import axios from "./base";

export function getTest() {
  console.log("发送请求");
  return axios.get("test");
}

export function getTodo() {
  console.log("发送请求");
  return axios.get("todos/1");
}