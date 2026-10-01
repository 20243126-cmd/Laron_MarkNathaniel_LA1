import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PokemonService, Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class PokemonComponent {

  private pokemonService = inject(PokemonService);

  selectedRegion = 'kanto';

  get pokemon(): Pokemon[] {
    return this.pokemonService.getPokemonByRegion(this.selectedRegion);
  }

  selectRegion(region: string): void {
    this.selectedRegion = region;
  }
}