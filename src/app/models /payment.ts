export class Payment {
    public card_number: string;
    public name_on_card: string;
    public expiration_date: string;
    public security_code: string;

  constructor() {
    this.card_number = "";
    this.name_on_card = "";
    this.expiration_date = "";
    this.security_code="";
  }

}