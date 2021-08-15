export class User {
  constructor(
    public Username: string,
    public email:string,
    public password:number,
    public  conformPassword:string,
    public address:string,
    public city:string,
    public state:string,
    public pincode:string,
  ) {
  }
}
