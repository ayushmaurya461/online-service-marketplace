export class User {
  constructor(
    public email: string,
    public name: string,
    private token: string,
    public mobile: number | string,
    public id: string,
    public userType: number
  ) {}

  get _token() {
    return this.token;
  }
}
