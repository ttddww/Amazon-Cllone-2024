import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2024-91ab6/us-central1/api",
 //deployed version of firebase function
  baseURL: "https://api-7rn5uejhza-uc.a.run.app/",
 //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-ibq0.onrender.com/",
});

export { axiosInstance };
