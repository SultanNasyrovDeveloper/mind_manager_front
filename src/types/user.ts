
export interface User {
  id: number;
  email: string;
  username: string;
  mind_palace: number;
  first_name: string;
  last_name: string;
  date_joined: string;
  date_of_birth: string;
}

export interface UserFormData
  extends Pick<User, 'first_name' | 'last_name'> {}
