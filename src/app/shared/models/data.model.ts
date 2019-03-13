export class Account{
  id: string;
  startDate: Date;
  branch: string;
  plan: string;
  balance: number;
  card: Card;
}

export class Card{
  id: string;
  number: string;
  expireDate: Date;
  cvc: string;
  type: string;
  accounts: Account[];
}
