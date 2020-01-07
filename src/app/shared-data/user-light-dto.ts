import { UserLightOptions } from './user-light-options';

export class UserLightDto {
    id: string;
    login: string;
    active: boolean;

    constructor(options: UserLightOptions = {}) {
        this.id = options.id || '';
        this.login = options.login || '';
        this.active = options.active || true;

    }
}
