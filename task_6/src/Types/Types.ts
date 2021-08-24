export type UserType = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
export type UserResponseType = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

export type ResponseType<D = Array<Record<string, unknown>>> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: D;
};