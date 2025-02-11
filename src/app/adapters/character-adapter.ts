import { Character } from './../modules/character.model';
export const characterAdapter = (characters : Character[]) =>
  characters.map((c) => ({...c,name : c.name.toUpperCase() }));

