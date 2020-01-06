import { UserLightDto } from './user-light-dto';
import { MediaDto } from './media-dto';

export class MediaNotationLightDto {
    id: string;
    liked: boolean;
    userLightDto: UserLightDto;
    mediaDto: MediaDto;


    constructor(options: {
        id: string;
        liked: boolean;
        userLightDto: UserLightDto;
        mediaDto: MediaDto;
        }) {
        this.id = options.id || null;
        this.liked = options.liked;
        this.userLightDto = options.userLightDto;
        this.mediaDto = options.mediaDto;
        }
}
