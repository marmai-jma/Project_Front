import { MediaOptions } from './media-options';

/**
 * @file
 * A media and its metadata.
 */

export enum MediaCategory {
    FILM,
    MUSIQUE,
    JEU,
    LIVRE
  }

export class MediaDto {

    id: string;
    label: string;

    category: MediaCategory;
    // category: string;
    type: string;

    authorName: string;
    authorSurname: string;

    description: string;
    mediaImageURL: string;
    publicationDate: string;

    likesTotalNumber: number;
    dislikesTotalNumber: number;

    constructor(options: MediaOptions = {}) {
        this.id = options.id || null;
        this.label = options.label || '';
        // this.category = options.category || '';
        switch (options.category) {
            case 'MUSIQUE':
              this.category = MediaCategory.MUSIQUE;
              break;
            case 'JEU':
              this.category = MediaCategory.JEU;
              break;
            case 'LIVRE':
              this.category = MediaCategory.LIVRE;
              break;
            case 'FILM':
                this.category = MediaCategory.FILM;
          } options.category || '';
        this.type = options.type || '';
        this.authorName = options.authorName || '';
        this.authorSurname = options.authorSurname || '';
        this.description = options.description || '';
        this.mediaImageURL = options.mediaImageURL || '';
        this.publicationDate = options.publicationDate || '';
        this.likesTotalNumber = options.likesNumber || 0;
        this.dislikesTotalNumber = options.dislikesNumber || 0;
    }

    /**
    * Return a JSON representation of the media (example quiz)
    * which is compatible with our backend.
    */
    /*toJson() {
        return {
            id: this.id,
            label: this.label,
            category: this.category,
            type: this.type,
            authorName: this.authorName,
            authorSurname: this.authorSurname,
            description: this.description,
            mediaImageURL: this.mediaImageURL,
            publicationDate: this.publicationDate,
            likesTotalNumber: this.likesTotalNumber,
            dislikesTotalNumber: this.dislikesTotalNumber

        };
    }*/

}
