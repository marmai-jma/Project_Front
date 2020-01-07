import { Component, OnInit, Input } from '@angular/core';
import { RecoDto } from 'src/app/shared-data/reco-dto';

@Component({
  selector: 'app-reco-item',
  templateUrl: './reco-item.component.html'
})
export class RecoItemComponent implements OnInit {

  @Input() recoItem: RecoDto;

  constructor() { }

  ngOnInit() {
  }

}
