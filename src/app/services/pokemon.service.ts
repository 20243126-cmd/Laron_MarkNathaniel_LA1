import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonData: Record<string, Pokemon[]> = {
    kanto: [
      {
        name: 'Pikachu',
        type: 'Electric',
        heldItem: 'Light Ball',
        description: 'A popular Electric-type Pokémon known for its powerful Thunderbolt.'
      },
      {
        name: 'Charizard',
        type: 'Fire/Flying',
        heldItem: 'Charcoal',
        description: 'A powerful dragon-like Pokémon that can breathe intense flames.'
      },
      {
        name: 'Blastoise',
        type: 'Water',
        heldItem: 'Mystic Water',
        description: 'A Water-type Pokémon that uses powerful water cannons on its shell.'
      },
      {
        name: 'Venusaur',
        type: 'Grass/Poison',
        heldItem: 'Miracle Seed',
        description: 'A Grass-type Pokémon with a large flower growing on its back.'
      },
      {
        name: 'Gengar',
        type: 'Ghost/Poison',
        heldItem: 'Spell Tag',
        description: 'A mysterious Ghost-type Pokémon that enjoys hiding in shadows.'
      },
      {
        name: 'Dragonite',
        type: 'Dragon/Flying',
        heldItem: 'Dragon Fang',
        description: 'A friendly but powerful Dragon-type Pokémon capable of flying at high speeds.'
      }
    ],

    johto: [
      {
        name: 'Typhlosion',
        type: 'Fire',
        heldItem: 'Charcoal',
        description: 'A powerful Fire-type Pokémon that creates explosions of flames.'
      },
      {
        name: 'Feraligatr',
        type: 'Water',
        heldItem: 'Mystic Water',
        description: 'A large Water-type Pokémon with powerful jaws and strong physical attacks.'
      },
      {
        name: 'Meganium',
        type: 'Grass',
        heldItem: 'Miracle Seed',
        description: 'A gentle Grass-type Pokémon that releases a pleasant aroma from its flower.'
      },
      {
        name: 'Ampharos',
        type: 'Electric',
        heldItem: 'Magnet',
        description: 'An Electric-type Pokémon whose tail can produce a bright light.'
      },
      {
        name: 'Scizor',
        type: 'Bug/Steel',
        heldItem: 'Metal Coat',
        description: 'A fast Bug and Steel-type Pokémon with powerful claw-like pincers.'
      },
      {
        name: 'Tyranitar',
        type: 'Rock/Dark',
        heldItem: 'Hard Stone',
        description: 'A powerful Rock-type Pokémon known for its incredible strength and durability.'
      }
    ],

    hoenn: [
      {
        name: 'Sceptile',
        type: 'Grass',
        heldItem: 'Miracle Seed',
        description: 'A fast Grass-type Pokémon with sharp leaves on its tail.'
      },
      {
        name: 'Blaziken',
        type: 'Fire/Fighting',
        heldItem: 'Charcoal',
        description: 'A powerful Fire and Fighting-type Pokémon known for its strong kicks.'
      },
      {
        name: 'Swampert',
        type: 'Water/Ground',
        heldItem: 'Mystic Water',
        description: 'A powerful Water and Ground-type Pokémon capable of moving through muddy terrain.'
      },
      {
        name: 'Gardevoir',
        type: 'Psychic/Fairy',
        heldItem: 'Twisted Spoon',
        description: 'A Psychic-type Pokémon that can use powerful psychic abilities to protect its trainer.'
      },
      {
        name: 'Metagross',
        type: 'Steel/Psychic',
        heldItem: 'Metal Coat',
        description: 'A powerful Steel and Psychic-type Pokémon with incredible intelligence.'
      },
      {
        name: 'Salamence',
        type: 'Dragon/Flying',
        heldItem: 'Dragon Fang',
        description: 'A powerful Dragon-type Pokémon that can fly freely through the sky.'
      }
    ]
  };

  getPokemonByRegion(region: string): Pokemon[] {
    return this.pokemonData[region.toLowerCase()] ?? [];
  }
}