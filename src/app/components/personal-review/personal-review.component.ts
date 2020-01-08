import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaDetailService } from 'src/app/services/media-detail.service';
import { ReviewDto } from 'src/app/shared-data/review-dto';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-personal-review',
  templateUrl: './personal-review.component.html'
})
export class PersonalReviewComponent implements OnInit {
  @Input() mediaId: string;
  personalReviewForm: FormGroup;
  userLogin: string;
  review: ReviewDto;
  globals: Globals;
  commentToShow : string;


  constructor(private fb: FormBuilder,
              private mediaDetailService: MediaDetailService,
              globals: Globals) { this.globals = globals; }

              ngOnInit() {
                // this.mediaDetailService.getReviewBymediaIdUserLogin(this.mediaId, this.userLogin).subscribe(data => this.review = data);
                // this.userLogin = this.globals.userLogin;
                this.globals.getCurrentUser().subscribe(
                  data => {
                    this.userLogin = data;
                    this.mediaDetailService
                      .getReviewBymediaIdUserLogin(this.mediaId, this.userLogin)
                      .subscribe(data2 => {
                        if (data2 !== null) {
                          this.review = data2;
                          this.commentToShow = this.review.comment;
                         } else {this.commentToShow = ''}
                         this.personalReviewForm = this.fb.group({ comment: [this.commentToShow, [Validators.required, Validators.maxLength(2550)]] });

                        });
                })
                this.personalReviewForm = this.fb.group({ comment: [this.commentToShow, [Validators.required, Validators.maxLength(2550)]] });
              ;}

  saveReview() {
    // this.userLogin = this.globals.userLogin;
    // this.globals.getCurrentUser().subscribe(
    //   data => {
    console.log(this.userLogin);
    //

    this.mediaDetailService.postReviewBymediaIdUserLogin(
      this.mediaId,
      this.userLogin,
      this.personalReviewForm.get('comment').value).subscribe(data => this.review = data);
    // });
  }

  deleteReview() {
    // this.userLogin = this.globals.userLogin;
    // this.globals.getCurrentUser().subscribe(
    //   data => {
    console.log(this.userLogin);
    console.log(this.review.id);
    // this.mediaDetailService.deleteReviewById(this.review.id).subscribe(() => this.personalReviewForm.get('comment').reset(''));
    this.mediaDetailService.deleteReviewBymediaIdUserLogin(this.mediaId, this.userLogin)
    .subscribe(() => this.personalReviewForm.get('comment').reset(''));
  // }
  //   )
  }
}
