import { Component, OnInit } from '@angular/core';
import { UserLightDto } from 'src/app/shared-data/user-light-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserLightDto = {id : 9993, login : 'moi', active : true};
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      login: ['moi', [Validators.required, Validators.maxLength(25)]]
    });
  }

  logUser() { }

}
