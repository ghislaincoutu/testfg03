import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  id38: string = '';
  htmlString38: string = '';
  htmlFile38: any = '';

  constructor(
    public http38: HttpClient,
    private sanitizer38: DomSanitizer,
    private route38: ActivatedRoute) { }

  ngOnInit(): void {
    this.route38.queryParams.subscribe(response01 => {
      this.id38 = response01['id'];
    });
    this.http38.get("assets/fiches/" + this.id38 + "/include.html", { responseType: 'text' }).subscribe(response02 => {
      this.htmlString38 = response02;
      this.htmlFile38 = this.sanitizer38.bypassSecurityTrustHtml(this.htmlString38);
    });
  }

}
