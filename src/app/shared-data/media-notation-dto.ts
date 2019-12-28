import { UserLightDto } from './user-light-dto';

export class MediaNotationDto {
    id: number;
    liked: boolean;
    userLightDto: UserLightDto;

    constructor(options: {
        id: number;
        liked: boolean;
        userLightDto: UserLightDto;
        }) {
            this.id = options.id;
            this.liked = options.liked;
            this.userLightDto = options.userLightDto;
        }
}
