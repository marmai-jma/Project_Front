import { Component, OnInit, Input } from '@angular/core';
import { UserDto } from 'src/app/shared-data/user-dto';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  @Input() userDetail: UserDto;

  constructor(private route: ActivatedRoute,
              private userDetailService: UserService) { }

  ngOnInit() {
    const userLogin = this.route.snapshot.paramMap.get('userLogin');
    console.log(this.route.snapshot.paramMap);
    this.userDetailService.getOneUser(userLogin)
      .subscribe(data => this.userDetail = data);
  }

}
