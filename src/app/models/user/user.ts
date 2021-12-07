import { Role } from "../role/role";

export class User {
    userName: string = "";
    userFirstName: string = "";
    userLastName: string = "";
    userPassword: string = "";
    roles: Role[] = [];
    jwtToken: string = "";    
}