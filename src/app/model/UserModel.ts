import {EmployeeModel} from "./EmployeeModel";

export class UserModel{
  id?: number;
  email?: string;
  password?: string;
  role?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: any;
  phone?: string;
  address?: string;
  zipCode?: string;
  employee?: EmployeeModel;
  tokens?: any;
}
