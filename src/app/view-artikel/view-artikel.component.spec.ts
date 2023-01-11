import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtikelComponent } from './view-artikel.component';

describe('ViewArtikelComponent', () => {
  let component: ViewArtikelComponent;
  let fixture: ComponentFixture<ViewArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
