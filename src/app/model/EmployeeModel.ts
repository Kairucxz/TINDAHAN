import {UserModel} from "./UserModel";

export class EmployeeModel {
  id?: any;
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string;
  phone?: string;
  address?: string;
  zipCode?: string;
  user?: UserModel;
}
