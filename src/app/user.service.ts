import { Injectable } from '@angular/core';
import { Register } from 'src/register';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  regDetails: Register;
  setData(userObject:Register)
  {
    this.regDetails=userObject;
  }
  getData():Register
  {
return this.regDetails;
  }
}
