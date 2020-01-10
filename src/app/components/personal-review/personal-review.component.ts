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
  commentToShow: string;
  showDelete: boolean;


  constructor(private fb: FormBuilder,
              private mediaDetailService: MediaDetailService,
              globals: Globals) { this.globals = globals; }

              ngOnInit() {
                this.personalReviewForm = new FormGroup({
                  comment : new FormControl('', [Validators.required, Validators.maxLength(2550)])
                });
                this.commentToShow = '';
                this.showDelete = false;


                this.globals.getCurrentUser().subscribe(
                  data => {
                    this.userLogin = data;
                    if (this.userLogin !== null) {
                    this.mediaDetailService
                      .getReviewBymediaIdUserLogin(this.mediaId, this.userLogin)
                      .subscribe(data2 => {
                        if (data2 === null) {
                          this.commentToShow = ''
                          this.showDelete = false;
                        } else {
                          this.review = data2;
                          this.commentToShow = this.review.comment;
                          this.showDelete = true;
                         }
                        this.personalReviewForm =
                        this.fb.group({ comment: [this.commentToShow, [Validators.required, Validators.maxLength(2550)]] });

                        },
                        error => console.log('Review inaccessible'));
                      }
                })
              ; }

  saveReview() {
    console.log(this.userLogin);
    console.log(this.personalReviewForm.get('comment').value);

    this.mediaDetailService.postReviewBymediaIdUserLogin(
      this.mediaId,
      this.userLogin,
      this.personalReviewForm.get('comment').value).subscribe(data => this.review = data);
    this.showDelete = true;
  }

  deleteReview() {
    console.log(this.userLogin);
    console.log(this.review.id);
    console.log('commentToShow');
    console.log(this.commentToShow);

    this.mediaDetailService.deleteReviewBymediaIdUserLogin(this.mediaId, this.userLogin)
    .subscribe(() => this.personalReviewForm.get('comment').reset(''),
    error => console.log('Pas de suppression de review'));
    this.showDelete = false;
    this.commentToShow = '';
  }
}
