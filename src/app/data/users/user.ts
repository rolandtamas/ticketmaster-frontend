import { ITicket } from "../tickets/ticket";
import { ICreditCard } from "../credit-cards/credit-card";

export interface IUser {
     id: string;
    username : string;
    firstName : string;
    lastName : string;
    creditCards : ICreditCard[];
    tickets : ITicket[];
}
