// __mocks__/axios.js

const axios: any = jest.createMockFromModule("axios");

axios.interceptors = {
  request: {
    use: jest.fn(),
  },
};

axios.interceptors.request.use.mockImplementation((config: any) => {
  // Implement the interceptor behavior here, for example:
  config.headers["api-key"] = "mocked-api-key";
  return config;
});

module.exports = axios;
