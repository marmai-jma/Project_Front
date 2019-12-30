import { Component, OnInit, Input } from '@angular/core';
import { ReviewDto } from 'src/app/shared-data/review-dto';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() reviewItem: ReviewDto;

  constructor() { }

  ngOnInit() {
  }

}
