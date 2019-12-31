import { Component, OnInit } from '@angular/core';
import { UserLightDto } from 'src/app/shared-data/user-light-dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserLightDto = {id : 9993, login : 'moi', active : true};
  userForm: FormGroup;
  globals: Globals;

  constructor(private fb: FormBuilder, globals: Globals) {
    this.globals = globals;
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      login: [this.globals.userLogin, [Validators.required, Validators.maxLength(25)]]
    });
  }

  logUser() {
    this.globals.userLogin = this.userForm.get('login').value;
    console.log(this.globals.userLogin);
  }

}
