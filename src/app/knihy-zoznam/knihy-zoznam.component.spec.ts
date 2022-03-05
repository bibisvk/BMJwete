import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihyZoznamComponent } from './knihy-zoznam.component';

describe('KnihyZoznamComponent', () => {
  let component: KnihyZoznamComponent;
  let fixture: ComponentFixture<KnihyZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihyZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihyZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
