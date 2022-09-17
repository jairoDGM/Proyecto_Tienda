import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCatalogoComponent } from './productos-catalogo.component';

describe('ProductosCatalogoComponent', () => {
  let component: ProductosCatalogoComponent;
  let fixture: ComponentFixture<ProductosCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
