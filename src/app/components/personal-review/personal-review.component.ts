import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaDetailService } from 'src/app/services/media-detail.service';

@Component({
  selector: 'app-personal-review',
  templateUrl: './personal-review.component.html',
  styleUrls: ['./personal-review.component.scss']
})
export class PersonalReviewComponent implements OnInit {
  @Input() mediaId: string;
  personalReviewForm: FormGroup;
  userLogin = 'moi';

  constructor(private fb: FormBuilder, private mediaDetailService: MediaDetailService) { }

  ngOnInit() {
    this.personalReviewForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(255)]]
    });
    console.log(this.mediaId);
  }

  saveReview() {
    console.log('save');
    console.log('mediaId' +this.mediaId);
    console.log(this.userLogin);
    console.log(this.personalReviewForm.get('comment').value)
    // enregistre la review sur le backend
    // tslint:disable-next-line: max-line-length
    this.mediaDetailService.postReviewBymediaIdUserLogin(this.mediaId, this.userLogin, this.personalReviewForm.get('comment').value).subscribe(() => console.log('add review success'));
  }

}
