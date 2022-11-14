import { Item, NewItem } from './types'
import axios from 'axios';

export async function SendData({ code, name, balance, unit, price, end, type, store, notes }: NewItem) {
  const dt = { code, name, balance, unit, price, end, type, store, notes }
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<NewItem>(
      'http://storeapi.marine-co.live/api/items',
      { ...dt },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return data 
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      return 'يوجد مشكلة في الإنترنت';
    }
    else if (axios.isAxiosError(error)) {
      return error.response?.data.message;
    } else {
      return 'يرجى المحاولة مرة أخرى';
    }
  }
}


export async function GetData() {
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.get(
      'http://storeapi.marine-co.live/api/items',
    );
    // console.log(data)
    return data
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      return 'يوجد مشكلة في الإنترنت';
    }
    else if (axios.isAxiosError(error)) {
      return error.response?.data.message;
    } else {
      return 'يرجى المحاولة مرة أخرى';
    }
  }
}


