export class User {
  constructor(
    public email: string,
    public name: string,
    private token: string,
    public id: string
  ) {}

  get _token() {
    return this.token;
  }
}
