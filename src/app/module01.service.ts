import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from './../environments/environment';

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

const envURL = environment.envURL;
let path39: string;
path39 = envURL + "/testfg03/fiches/";

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
    htmlfile: path39 + "aide001/include.html"
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
    htmlfile: path39 + "aide002/include.html"
  },
  {
    comment: "",
    id: "aide003",
    active: "true",
    category: "Outil d’aide à la rédaction",
    title: "Types de discours",
    course: "B05, B06",
    module: "B05-M18, B06-M20, B06-M22",
    activity: "B05-M18-A01, B06-M20-A01, B06-M22-A01",
    keywords: "types de discours, discours, informations, discours informatifs, informer, discours explicatifs, explications, expliquer, discours incitatifs, incitations, inciter, discours expressifs, expressions, exprimer, discours argumentatifs, argumentations, argumenter",
    htmlfile: path39 + "aide003/include.html"
  },
  {
    comment: "",
    id: "aide004",
    active: "true",
    category: "Outil d’aide à la rédaction",
    title: "Types d’arguments",
    course: "B05, B06",
    module: "B05-M18, B05-M19, B06-M22",
    activity: "B05-M18-A03, B05-M19-A01, B06-M22-A01",
    keywords: "argumentatifs, arguments, points de vue, faits, opinions",
    htmlfile: path39 + "aide004/include.html"
  },
  {
    comment: "",
    id: "gram001",
    active: "true",
    category: "Grammaire",
    title: "Exprimer la concession",
    course: "ADA",
    module: "ADA-U02",
    activity: "ADA-U02-A04",
    keywords: "concessions, exprimer, expressions, négociations, concéder, négocier, compromis, argumentations, arguments",
    htmlfile: path39 + "gram001/include.html"
  },
  {
    comment: "",
    id: "gram002",
    active: "true",
    category: "Grammaire",
    title: "Publicité et art de persuader",
    course: "ADA",
    module: "ADA-U02",
    activity: "ADA-U02-A03",
    keywords: "pub, publicités, persuader, persuasions, messages publicitaires, art de persuader, stratégies, discours incitatifs, inciter, incitatifs, arguments, argumentation, argumenter",
    htmlfile: path39 + "gram002/include.html"
  },
  {
    comment: "",
    id: "phon001",
    active: "true",
    category: "Phonétique",
    title: "« E » muet",
    course: "B01",
    module: "B01-M01",
    activity: "B01-M01-A02",
    keywords: "e, sons, écoute, écouter, muets",
    htmlfile: path39 + "phon001/include.html"
  },
  {
    comment: "",
    id: "phon002",
    active: "true",
    category: "Phonétique",
    title: "« E » qui se prononce",
    course: "B01",
    module: "B01-M01",
    activity: "B01-M01-A02",
    keywords: "e, sons, écoute, écouter, prononcés, prononcer, prononciations",
    htmlfile: path39 + "phon002/include.html"
  }
];

@Injectable({
  providedIn: 'root'
})
export class Module01Service {

  constructor() { }

  getData39(): Observable<Data39[]> {
    return of(data39).pipe(delay(500));
  }

}
