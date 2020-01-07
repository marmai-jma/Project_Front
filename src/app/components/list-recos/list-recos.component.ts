import { Component, OnInit } from '@angular/core';
import { RecoDto } from 'src/app/shared-data/reco-dto';
import { RecosService } from 'src/app/services/recos.service';

@Component({
  selector: 'app-list-recos',
  templateUrl: './list-recos.component.html'
})
export class ListRecosComponent implements OnInit {
  recoListe: RecoDto[];

  constructor(private recoService: RecosService) { }

  ngOnInit() {
    console.log();
    this.recoService.getRecos()
      .subscribe(data => {
        this.recoListe = data;
      });
  }

}
