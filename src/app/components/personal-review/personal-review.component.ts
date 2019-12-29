import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaDetailService } from 'src/app/services/media-detail.service';
import { ReviewDto } from 'src/app/shared-data/review-dto';

@Component({
  selector: 'app-personal-review',
  templateUrl: './personal-review.component.html',
  styleUrls: ['./personal-review.component.scss']
})
export class PersonalReviewComponent implements OnInit {
  @Input() mediaId: string;
  personalReviewForm: FormGroup;
  userLogin = 'moi';
  review: ReviewDto;


  constructor(private fb: FormBuilder, private mediaDetailService: MediaDetailService) { }

  ngOnInit() {
    this.personalReviewForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(255)]]
    });
    console.log(this.mediaId);
  }

  saveReview() {
    this.mediaDetailService.postReviewBymediaIdUserLogin(this.mediaId,
      this.userLogin,
      this.personalReviewForm.get('comment').value).subscribe(data => this.review = data);
  }

  deleteReview() {
    console.log(this.review.id);
    this.mediaDetailService.deleteReviewById(this.review.id).subscribe(() => this.personalReviewForm.get('comment').reset(''));
  }
}
