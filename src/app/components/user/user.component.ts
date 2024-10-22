import { Component, OnInit, Input } from '@angular/core';
import { UserLightDto } from 'src/app/shared-data/user-light-dto';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Globals } from 'src/app/globals';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDto } from 'src/app/shared-data/user-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: UserLightDto = { id: '', login: '', active: false };

  userForm: FormGroup;
  globals: Globals;

  @Input() userVerif: UserDto;


  constructor(private fb: FormBuilder,
              globals: Globals,
              private router: Router,
              private userService: UserService) {
    this.globals = globals;
   }

  ngOnInit() {
    this.userForm = new FormGroup({
      login : new FormControl()
    });

    this.globals.getCurrentUser().subscribe(
      data => {
    this.userForm = this.fb.group({
      login: [data, [Validators.required, Validators.maxLength(25)]]
    });
    console.log(this.userForm.value)
      }
    );
  }

  logUser() {
    this.globals.setCurrentUser(this.userForm.get('login').value);
    this.router.navigate(['/']);
    console.log(this.userForm.value);
  }

  verifyUser() {
    // const userId = this.globals.userLogin;
    // this.userService.getOneUser(userId)
    //   .subscribe(data => this.userVerif = data);
    // console.log('verifyUser :' + this.userVerif);
  }



}
