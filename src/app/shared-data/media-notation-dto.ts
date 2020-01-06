import { UserLightDto } from './user-light-dto';

export class MediaNotationDto {
    id: string;
    liked: boolean;
    userLightDto: UserLightDto;

    constructor(options: {
        id: string;
        liked: boolean;
        userLightDto: UserLightDto;
        }) {
        this.id = options.id || null;
        this.liked = options.liked;
        this.userLightDto = options.userLightDto;
        }
}
