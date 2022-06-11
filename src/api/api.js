import axios from 'axios';
const baseUrl = 'https://mocki.io/v1';

export const getTodoHistoryList = async() => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/267c08e5-07c9-435b-8e34-a7403cef1bb5`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data
}