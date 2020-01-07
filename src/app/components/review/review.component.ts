import { Component, OnInit, Input } from '@angular/core';
import { ReviewDto } from 'src/app/shared-data/review-dto';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  @Input() reviewItem: ReviewDto;

  constructor() { }

  ngOnInit() {
  }

}
