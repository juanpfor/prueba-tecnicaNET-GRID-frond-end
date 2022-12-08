import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpokemonsComponent } from './allpokemons.component';

describe('AllpokemonsComponent', () => {
  let component: AllpokemonsComponent;
  let fixture: ComponentFixture<AllpokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
