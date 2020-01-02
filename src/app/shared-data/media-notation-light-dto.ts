import { UserLightDto } from './user-light-dto';
import { MediaDto } from './media-dto';

export class MediaNotationLightDto {
    id: number;
    liked: boolean;
    userLightDto: UserLightDto;
    mediaDto: MediaDto;


    constructor(options: {
        id: number;
        liked: boolean;
        userLightDto: UserLightDto;
        mediaDto: MediaDto;
        }) {
            this.id = options.id;
            this.liked = options.liked;
            this.userLightDto = options.userLightDto;
            this.mediaDto = options.mediaDto;
        }
}
