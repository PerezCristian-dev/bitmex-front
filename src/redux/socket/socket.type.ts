export interface CreateCardPayloadI {
  createdAt: string;
  uuid: string;
  name: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  type: string;
  accountType: string;
}
