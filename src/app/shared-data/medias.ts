import { MediaDto } from './media-dto';

export const MEDIAS: MediaDto[] = [
    {
        id: '1',
        label: 'Starwars',
        category: 'FILM',
        type: 'SF',
        authorName: 'Lucas',
        authorSurname: 'George',
        description: 'Il y a bien longtemps',
        mediaImageURL: '61zAtWHeXLLSY550',
        publicationDate: '1977-10-19',
        likesTotalNumber: 0,
        dislikesTotalNumber: 0
    },{
        'id': '2',
        'label': 'Hotel California',
        'category': 'MUSIQUE',
        'type': 'ROCK',
        'authorName': 'The Eagles',
        'authorSurname': '',
        'description': 'Hotel California est le cinquième album studio du groupe rock américain Eagles',
        'mediaImageURL': 'http://images.45cat.com/eagles-usa-hotel-california-asylum-3-s.jpg',
        'publicationDate': '1976-12-08',
        'likesTotalNumber': 0,
        'dislikesTotalNumber': 0
    },
        {
            'id': '3',
            'label': 'L\'appel de Cthulhu',
            'category': 'JEU',
            'type': 'HISTORIQUE',
            'authorName': 'Petersen',
            'authorSurname': 'Sandy',
            'description': 'Ce jeu emprunte à l’univers de H. P. Lovecraft son ambiance mystérieuse et oppressante. Les joueurs sont confrontés à des situations où ils doivent déjouer les complots de ces créatures et de leurs adorateurs. ',
            'mediaImageURL': 'https://en.wikipedia.org/wiki/File:Call_of_Cthulhu_RPG_1st_ed_1981.jpg',
            'publicationDate': '1981-01-01',
            'likesTotalNumber': 0,
            'dislikesTotalNumber': 0
        },
        {
            'id': '4',
            'label': 'Le seigneur des anneaux',
            'category': 'LIVRE',
            'type': 'FANTASY',
            'authorName': 'Tolkien',
            'authorSurname': 'J.R.R',
            'description': 'Roman en 3 prenant place dans le monde de fiction de la Terre du Milieu, il suit la quête du hobbit Frodo Bessac, qui doit détruire l\'Anneau unique afin que celui-ci ne tombe pas entre les mains de Sauron, le Seigneur des ténèbres.',
            'mediaImageURL': 'https://images.fr.shopping.rakuten.com/photo/1270487382.jpg',
            'publicationDate': '1954-07-29',
            'likesTotalNumber': 0,
            'dislikesTotalNumber': 0
        }
];

