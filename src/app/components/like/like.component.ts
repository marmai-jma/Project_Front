import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/globals';
import { MediaDetailService } from 'src/app/services/media-detail.service';
import { MediaNotationLightDto } from 'src/app/shared-data/media-notation-light-dto';
import { MediaDetailDto } from 'src/app/shared-data/media-detail-dto';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html'
})
export class LikeComponent implements OnInit {
  globals: Globals;
  userLogin: string;
  @Input() mediaId: string;
  liked: boolean;
  disLiked: boolean;
  mediaNotationLightDto: MediaNotationLightDto;

  @Input() mediaDetail: MediaDetailDto;
  totalLiked = 0;
  totalDisLiked = 0;



  constructor(private route: ActivatedRoute, globals: Globals,
              private mediaDetailService: MediaDetailService,
    ) {this.globals = globals; }

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('mediaId');

      this.liked = false;
      this.disLiked = false;

      this.globals.getCurrentUser().subscribe(
        data => {
        console.log(data);
        this.userLogin = data;

        if (this.userLogin !== null){

        this.mediaDetailService.getMediaNotationBymediaIdUserLogin(this.mediaId, this.userLogin)
      .subscribe(data => {
        this.mediaNotationLightDto = data;
        if (this.mediaNotationLightDto.liked !== null) {
          // console.log('not null');
          this.liked = this.mediaNotationLightDto.liked;
          this.disLiked = ! this.liked;
        }

      } );}

        this.mediaDetailService.getMediaDetailById(id)
      .subscribe(dat => {
        this.mediaDetail = dat;
        this.totalLiked = this.mediaDetail.likesNumber;
        this.totalDisLiked = this.mediaDetail.dislikesNumber; });


      });
    }


  likeMedia() {
    console.log('test');
    if (this.liked !== true) {
      this.totalLiked = this.totalLiked + 1;
      if (this.disLiked === true) {
        if (this.totalDisLiked > 0) {
          this.totalDisLiked = this.totalDisLiked - 1;
        }
      }
    }

    this.liked = true;
    this.disLiked = false;

    this.mediaDetailService.postNotationBymediaIdUserLogin(this.mediaId, this.userLogin, this.liked)
    .subscribe(() => console.log('liked'));



    }


  dislikeMedia() {
    console.log('false');
    if (this.disLiked !== true) {
      this.totalDisLiked = this.totalDisLiked + 1;
      if (this.liked === true) {
        if (this.totalDisLiked > 0) {
          this.totalLiked = this.totalLiked - 1;
        }
      }
    }

    this.liked = false;
    this.disLiked = true;
    this.mediaDetailService.postNotationBymediaIdUserLogin(this.mediaId, this.userLogin, this.liked)
    .subscribe(() => console.log('disliked'));
}
}
