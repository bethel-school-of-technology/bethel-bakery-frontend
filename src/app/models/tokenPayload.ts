export class TokenPayload {
    sub: string = "";
    exp: number = 0;
    iat: number = 0;
    role: string[] = [];    
}