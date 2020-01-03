import { Component, OnInit, Input } from '@angular/core';
import { Globals } from 'src/app/globals';
import { MediaDetailService } from 'src/app/services/media-detail.service';
import { MediaNotationLightDto } from 'src/app/shared-data/media-notation-light-dto';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  globals: Globals;
  userLogin: string;
  @Input() mediaId: string;
  liked: boolean;
  disLiked: boolean;
  mediaNotationLightDto: MediaNotationLightDto;

  constructor(globals: Globals,
              private mediaDetailService: MediaDetailService,
    ) {this.globals = globals; }

  ngOnInit() {
    this.userLogin = this.globals.userLogin;
    this.liked = false;
    this.disLiked = false;


    console.log(this.mediaId);
    // this.mediaDetailService.  getMediaNotationBymediaIdUserLogin(this.mediaId, this.userLogin)
    //    .subscribe(data => {
    //      this.mediaNotationLightDto = data;
    //      if (this.mediaNotationLightDto.liked !== null){
    //        console.log('not null');
    //        this.liked = this.mediaNotationLightDto.liked;
    //        this.disLiked = ! this.liked;
    //      }
    //      console.log(this.liked);

    //     } );
  }

}
