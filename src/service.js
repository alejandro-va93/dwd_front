import axios from "axios";

const baseUrl =
  "http://dwdback-env.eba-kuyrpw3s.us-east-1.elasticbeanstalk.com/api/";

export const getAll = async () => {
  try {
    const url = `${baseUrl}appointments`;
    let res = await axios.get(url);
    return console.log("res", res.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
