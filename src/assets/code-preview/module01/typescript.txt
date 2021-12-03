import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Data39 {
  comment: string;
  id: string;
  active: string;
  category: string;
  title: string;
  course: string;
  module: string;
  activity: string;
  keywords: string;
  htmlfile: string;
  document39?: any;
}

let path39: string;
path39 = "assets/fiches";

const data39: Data39[] = [
  {
    comment: "",
    id: "aide001",
    active: "true",
    category: "Outil d’aide à la rédaction",
    title: "Schéma narratif",
    course: "B05",
    module: "B05-M17",
    activity: "B05-M17-A02",
    keywords: "rédaction, schémas narratifs, récits, textes narratifs, contes",
    htmlfile: path39 + "/aide001/include.html"
  },
  {
    comment: "",
    id: "aide002",
    active: "true",
    category: "Outil d’aide à la rédaction",
    title: "Reformulation",
    course: "B05, B06",
    module: "B05-M17, B05-M18, B06-M20",
    activity: "B05-M17-A02, B05-M18-A03, B05-M18-A05, B06-M20-A01",
    keywords: "reformulations, procédés explicatifs, reformuler, répétitions, synthèses",
    htmlfile: path39 + "/aide002/include.html"
  }
];

@Injectable({
  providedIn: 'root'
})
export class Module01Service {

  constructor() { }

  getData39(): Observable<Data39[]> {
    console.log(data39);
    return of(data39).pipe(delay(500));
  }

}
