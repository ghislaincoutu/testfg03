import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  id = 'string';
  htmlfile= 'any';

  constructor(private route56: ActivatedRoute) { }

  ngOnInit(): void {

    this.route56.queryParams
      .subscribe(response01 => {
        console.log(response01);
        this.id = response01['id'];
        console.log(this.id);
        this.htmlfile = "/assets/fiches/" + this.id + "/include.html";
      }
      );
  }

}
