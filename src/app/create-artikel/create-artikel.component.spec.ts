import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtikelComponent } from './create-artikel.component';

describe('CreateArtikelComponent', () => {
  let component: CreateArtikelComponent;
  let fixture: ComponentFixture<CreateArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
