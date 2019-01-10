import axios from 'axios';







export async function foodApi(data) {
  try {
    const response = await axios.get(`https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json`);
    return response;
  } catch (error) {
    console.error(error);
  }
}


