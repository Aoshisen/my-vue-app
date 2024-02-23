import axiosFactory, {
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

const axiosConfig: CreateAxiosDefaults = {
  // 不配置完整的baseUrl 触发 vite 的反向代理
  baseURL: "/api",
  timeout: 1000,
};
const axios = axiosFactory.create(axiosConfig);

// 请求拦截器成功的拦截
const requestInterceptorSuccess =  (
  config: InternalAxiosRequestConfig
) => {
  // 返回配置
  console.log("请求拦截器成功的拦截", config);
  return config;
};
// 请求拦截器,失败的拦截
const requestInterceptorFail =  (error: any) => {
  console.log("请求拦截器失败的拦截", error);
  return Promise.reject(error);
};

//响应拦截器成功的情况
const responseInterceptorSuccess =  (response: AxiosResponse) => {
  console.log("响应拦截器成功的拦截", response);
  return response;
};
//响应拦截器,失败的情况
const responseInterceptorFail =  (error: any) => {
  console.log("响应拦截器失败的拦截", error);
  return Promise.reject(error);
};

axios.interceptors.request.use(
  requestInterceptorSuccess,
  requestInterceptorFail
);

axios.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorFail
);

export default axios;
