import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { PokemonComponent } from './pokemon/pokemon';
import { PokemartComponent } from './pokemart/pokemart';
import { MenuComponent } from './menu/menu';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'kanto',
    component: Kanto
  },
  {
    path: 'johto',
    component: Johto
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
  {
    path: 'pokemart',
    component: PokemartComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];