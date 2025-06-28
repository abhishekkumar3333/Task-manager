import axios from 'axios';
import { ApiClient } from './apiClient';

export const Api = async ({method = "GET",url= "/todos",data=""}) => {
  try {
    const response = await ApiClient({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
