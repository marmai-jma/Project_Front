import { RecoOptions } from './reco-options';

export class RecoDto {
    id: string;
    mediaLabel: string;

    category: string;
    type: string;

    notation: number;

    constructor(options: RecoOptions = {}) {
        this.id = options.id || null;
        this.mediaLabel = options.mediaLabel || '';
        this.category = options.category || '';
        this.type = options.type || '';
        this.notation = options.notation || 0;
}

}
