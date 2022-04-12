import axios from "axios";

// Add a response interceptor
axios.interceptors.response.use(
  function (responseObj) {
    // Any status code that is within the range of 2xx cause this function to trigger
    // add a response property
    responseObj.response = {
      status: responseObj.status,
      data: responseObj.data,
    };
    return Promise.resolve(responseObj);
  },
  function (error) {
    // Any status code that falls outside the range of 2xx cause this function to trigger
    const isExpectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    //if server or network error, set error response to unexpected error occurred
    if (!isExpectedError) {
      error.response.data = {
        errors: [{ error: "An unexpected error occurred! 😔 " }],
      };
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

const apiRequest = ({
  method,
  url,
  data,
  token,
  headers = { "Content-Type": "application/json" },
}) =>
  axios({
    method,
    url: `${process.env.API_URL}/${url}`,
    data,
    headers: {
      ...headers,
      ...(!!token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });

export default apiRequest;
