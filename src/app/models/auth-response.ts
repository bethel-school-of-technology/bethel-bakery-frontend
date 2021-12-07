import { User } from "./user/user";

export class AuthResponse {
    user: User = new User;
    jwtToken: string = "";
}