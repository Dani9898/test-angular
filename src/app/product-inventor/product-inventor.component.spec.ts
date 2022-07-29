import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventorComponent } from './product-inventor.component';

describe('ProductInventorComponent', () => {
  let component: ProductInventorComponent;
  let fixture: ComponentFixture<ProductInventorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInventorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInventorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
