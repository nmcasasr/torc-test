import Axios from "axios";

function returnAxiosInstance() {
  return Axios.create();
}

export function get(url: any, params?:any){
  const axios = returnAxiosInstance();
  return axios.get(url,{params});
}