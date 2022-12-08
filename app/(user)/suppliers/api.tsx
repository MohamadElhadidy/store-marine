import { NewSupplier, UpdateSupplier } from './types'
import axios from 'axios';

export async function SendData({ code, name, store, notes }: NewSupplier) {
  const dt = { code, name, store, notes }
  try {
    const { data } = await axios.post<NewSupplier>(
      'http://storeapi.marine-co.live/api/suppliers',
      { ...dt },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
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


export async function GetData() {
  // try {
    const { data } = await axios.get(
      `http://storeapi.marine-co.live/api/suppliers`,
    );
    // console.log(data)
    return data
  // } catch (error: any) {
  //   if (error.code === 'ERR_NETWORK') {
  //     return 'يوجد مشكلة في الإنترنت';
  //   }
  //   else if (axios.isAxiosError(error)) {
  //     return error.response?.data.message;
  //   } else {
  //     return 'يرجى المحاولة مرة أخرى';
  //   }
  // }
}

export async function DeleteData(id : any) {
  try {
    const { data } = await axios.delete(
      `http://storeapi.marine-co.live/api/suppliers/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
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

export async function EditData(id: any) {
  try {
    const { data } = await axios.get(
      `http://storeapi.marine-co.live/api/suppliers/${id}/edit`,
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

export async function UpdateData({ id, code, name, store, notes }: UpdateSupplier) {
  const dt = { code, name, store, notes }
  try {
    const { data } = await axios.put<UpdateSupplier>(
      `http://storeapi.marine-co.live/api/suppliers/${id}`,
      { ...dt },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
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


