import axios from "axios";

axios.defaults.baseURL = "http://localhost:6086/api/";

const postUtil = (url, data) => axios.post(url, data);

const putUtil = (url, data) =>
  axios({
    method: "put",
    url,
    data,
  });

const patchUtil = (url, data) =>
  axios({
    method: "patch",
    url,
    data,
  });

const getUtil = (url, data = null) => axios.get(url, { params: data });
const deleteUtil = (url, data = null) => axios.delete(url, { params: data });

export function setDefault() {
  const token = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  axios.defaults.headers = headers;
}

export { postUtil, getUtil, putUtil, patchUtil, deleteUtil };
