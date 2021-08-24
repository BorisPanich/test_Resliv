import axios, {AxiosResponse} from 'axios'
import {UserType, ResponseType} from "../Types/Types";

const instance = axios.create({
  baseURL: 'https://reqres.in/api/'
})

export const api = {
  getUsers(): Promise<AxiosResponse<ResponseType<Array<UserType>>>> {
    return instance.get<ResponseType<Array<UserType>>>(`users?per_page=12`)
  },
  removeEmploy(id: number): Promise<AxiosResponse> {
    return instance.delete(`users/${id}`)
  },
  addEmploy(name: string) {
    const newUser = {
      id: 100500,
      name,
      last_name: 'bar',
      avatar: 'url1',
      mail: 'qweqw@qwe.er'
    }
    return instance.post(`users`, newUser)
  }
}