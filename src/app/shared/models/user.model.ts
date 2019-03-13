import {Account, Card} from './data.model';


export class User{
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  password?: String;
  accounts?: Account[];
  cards?: Card[];
}
