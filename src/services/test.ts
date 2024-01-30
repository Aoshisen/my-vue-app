import axios from "./base";

export const getTest = () => {
  return axios.get("test");
};

export const getTodo = () => {
  console.log("发送请求");
  return axios.get("todos/1");
};
