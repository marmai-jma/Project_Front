import { UserLightDto } from './user-light-dto';

export class ReviewDto {
    id: number;
    comment: string;
    reviewDate: string;
    usefulNumber: number;
    uselessNumber: number;
    userLightDto: UserLightDto;

    constructor(options: {
        id: number;
        comment: string;
        reviewDate: string;
        usefulNumber: number;
        uselessNumber: number;
        userLightDto: UserLightDto;
        }) {
            this.id = options.id;
            this.comment = options.comment;
            this.reviewDate = options.reviewDate;
            this.usefulNumber = options.usefulNumber;
            this.uselessNumber = options.uselessNumber;
            this.userLightDto = options.userLightDto;
        }
}
