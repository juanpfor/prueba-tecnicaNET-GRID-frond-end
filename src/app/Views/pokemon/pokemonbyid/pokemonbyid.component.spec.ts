import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonbyidComponent } from './pokemonbyid.component';

describe('PokemonbyidComponent', () => {
  let component: PokemonbyidComponent;
  let fixture: ComponentFixture<PokemonbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
