import { Component, OnInit } from '@angular/core';
import { UserLightDto } from 'src/app/shared-data/user-light-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserLightDto = {id : 9993, login : 'moi', active : true};

  constructor() { }

  ngOnInit() {
  }

}
