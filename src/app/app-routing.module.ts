import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilantGuard } from './Guards/vigilant.guard';
import { LoginComponent } from './Views/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component'
import { AllpokemonsComponent } from './Views/pokemon/allpokemons/allpokemons.component'
import { PokemonbyidComponent } from './Views/pokemon/pokemonbyid/pokemonbyid.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate : [VigilantGuard]
    children: [
      { path: '', redirectTo: 'allpokemons', pathMatch: 'full' },
      {
        path: 'allpokemons',
        component: AllpokemonsComponent,
        canActivate: [VigilantGuard]
      },
      {
        path: 'pokemonbyid/:id',
        component: PokemonbyidComponent ,
        canActivate: [VigilantGuard]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  AllpokemonsComponent,
  PokemonbyidComponent
]
