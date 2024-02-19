import axios from "axios";

const event = axios.create({
  baseURL: "https://shrtlnk.dev/api/v2/link",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((value) => {
  value.headers["api-key"] = "1ZSxb3e8UgQjv6NjhOTLCtB4yFHrmS0HeXMyRjG0HPjbc";
  return value;
});

export default event;
