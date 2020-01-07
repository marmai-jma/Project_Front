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
  userLogin : string;
  review: ReviewDto;
  globals: Globals;


  constructor(private fb: FormBuilder,
              private mediaDetailService: MediaDetailService,
              globals: Globals) { this.globals = globals; }

  ngOnInit() {
    this.userLogin = this.globals.userLogin;
    this.personalReviewForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(255)]]
    });
    console.log(this.userLogin);
  }

  saveReview() {
    this.userLogin = this.globals.userLogin;
    console.log(this.userLogin);
    this.mediaDetailService.postReviewBymediaIdUserLogin(this.mediaId,
      this.userLogin,
      this.personalReviewForm.get('comment').value).subscribe(data => this.review = data);
  }

  deleteReview() {
    this.userLogin = this.globals.userLogin;
    console.log(this.userLogin);
    console.log(this.review.id);
    // this.mediaDetailService.deleteReviewById(this.review.id).subscribe(() => this.personalReviewForm.get('comment').reset(''));
    this.mediaDetailService.deleteReviewBymediaIdUserLogin(this.mediaId,this.userLogin)
    .subscribe(() => this.personalReviewForm.get('comment').reset(''));
  }
}
