import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoVisitaComponent } from './cartao-visita.component';

describe('CartaoVisitaComponent', () => {
  let component: CartaoVisitaComponent;
  let fixture: ComponentFixture<CartaoVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
