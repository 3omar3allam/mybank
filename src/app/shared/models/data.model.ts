export class Account {
  id: string;
  startDate: string;
  branch: string;
  plan: string;
  balance: number;
  card: Card;
}

export class Card {
  id: string;
  number: string;
  expireDate: string;
  cvc: string;
  type: string;
  accounts: Account[];
}
