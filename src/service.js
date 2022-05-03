import axios from "axios";

const baseUrl =
  "http://dwdback-env.eba-kuyrpw3s.us-east-1.elasticbeanstalk.com/api/appointments";

export const create = async (body) => {
  var res = await axios.post(baseUrl, body);
  console.log("service", res);
  return res.data.status == "ok" ? res.data : res.data?.message;
};

export const getAll = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    return null;
  }
};

//parameter id can be id or date
export const get = async (num) => {
  try {
    const url = `${baseUrl}/${num}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const update = async (id) => {
  try {
    const url = `${baseUrl}/${id}`;
    const res = await axios.update(url);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const destroy = async (id) => {
  try {
    const url = `${baseUrl}/${id}`;
    const res = await axios.delete(url);
    return res.data;
  } catch (error) {
    return null;
  }
};
