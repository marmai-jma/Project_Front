import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-review',
  templateUrl: './personal-review.component.html',
  styleUrls: ['./personal-review.component.scss']
})
export class PersonalReviewComponent implements OnInit {

  personalReviewForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalReviewForm = this.fb.group({
      login: ['moi', Validators.required],
      comment:['',[Validators.required,Validators.maxLength(255)]]
    });
  }

  saveReview(){
    // enregistre la review sur le backend
  };

}
