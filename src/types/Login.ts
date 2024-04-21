export interface User {
  IdUser?: number;
  Code?: string;
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Dni: string;
  Access: boolean;
  RoleId: number;
  Mail: string;
  Birdhate: string;
  Image: string;
}
export interface Login {
  UserName: string;
  Password: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
