import { IUser, IName } from '../interfaces'

export class User implements IUser {
    id: number;
    token: string
    name: IName;
    login: string;
    password: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.token = user.token;
        this.name.firstName = user.name.firstName;
        this.name.lastName = user.name.lastName;
        this.login = user.login;
        this.password = user.password;
    }
}
