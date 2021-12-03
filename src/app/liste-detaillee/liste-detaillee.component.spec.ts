import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailleeComponent } from './liste-detaillee.component';

describe('ListeDetailleeComponent', () => {
  let component: ListeDetailleeComponent;
  let fixture: ComponentFixture<ListeDetailleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
