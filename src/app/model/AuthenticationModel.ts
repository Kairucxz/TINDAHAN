export class AuthenticationModel {
  email: string;
  password: string;
  access_token: string;
  refresh_token: string;
  userId: string;
  role: string;
  constructor(email: string, password: string, access_token: string, refresh_token: string, userId: string, role: string) {
    this.email = email;
    this.password = password;
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.userId = userId;
    this.role = role;
  }
}
