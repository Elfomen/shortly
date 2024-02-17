import axiosEvent from "../axios";

axiosEvent.interceptors.request.use((value) => {
  value.headers["api-key"] = "1ZSxb3e8UgQjv6NjhOTLCtB4yFHrmS0HeXMyRjG0HPjbc";
  return value;
});

export default axiosEvent;
