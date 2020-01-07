import { UserOptions } from './user-options';

export class UserDto {
    id: string;
    login: string;
    password: string;
    userName: string;
    userSurname: string;
    avatarImageURL: string;
    email: string;

    constructor(options: UserOptions = {}) {
        this.id = options.id || '';
        this.login = options.login || '';
        this.password = options.password || '';
        this.userName = options.userName || '';
        this.userSurname = options.userSurname || '';
        this.avatarImageURL = options.avatarImageURL || '';
        this.email = options.email || '';
    }
}
