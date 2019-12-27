import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/shared-data/user-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserDto = {id : 1, login : 'toto'};

  constructor() { }

  ngOnInit() {
  }

}
