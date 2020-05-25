import { IMatch } from "../matches/match";


export interface ITicket {
    
id : string 
status : number; 
seat : string; 
sector : string; 
price : number;
match : IMatch;
    
}
