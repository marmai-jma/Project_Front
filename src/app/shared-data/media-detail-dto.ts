import { ReviewDto } from './review-dto';
import { MediaNotationDto } from './media-notation-dto';

export class MediaDetailDto {
    id: string;
    label: string;
    category: string;
    type: string;
    authorName: string;
    authorSurname: string;
    description: string;
    mediaImageURL: string;
    publicationDate: string;
    likesNumber: number;
    dislikesNumber: number;
    mediaNotationDtos?: MediaNotationDto[];
    reviewDtos?: ReviewDto[];

    constructor(options: {
        id: string;
        label: string;
        category: string;
        type: string;
        authorName: string;
        authorSurname: string;
        description: string;
        mediaImageURL: string;
        publicationDate: string;
        likesNumber: number;
        dislikesNumber: number;
        mediaNotationDtos?: MediaNotationDto[];
        reviewDtos?: ReviewDto[];
        }) {
            this.id = options.id;
            this.label = options.label;
            this.category = options.category;
            this.type = options.type;
            this.authorName = options.authorName;
            this.authorSurname = options.authorSurname;
            this.description = options.description;
            this.mediaImageURL = options.mediaImageURL;
            this.publicationDate = options.publicationDate;
            this.likesNumber = options.likesNumber;
            this.dislikesNumber = options.dislikesNumber;
            this.mediaNotationDtos = options.mediaNotationDtos || null;
            this.reviewDtos = options.reviewDtos || null;
        }
}



