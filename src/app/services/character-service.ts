import {  Injectable, signal } from '@angular/core';
import {  of } from 'rxjs';
import { Character } from '../modules';

//zone.js
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
 state = signal({
  characters: new Map<number,Character>(),
 });

constructor(){
  this.getCharacters();
}

 getFormattedCharacters(){
  return Array.from(this.state().characters.values());
 }

 getCharacterById(id: number){
  return this.state().characters.get(id);
 }

  getCharacters(): void {
   const mockCharacters:Character[] = [
    {id: 1, name: 'Juan', lastname: 'Doe',age: 25},
    {id: 2, name: 'Pedro', lastname: 'Perez',age: 30},
    {id: 3, name: 'Maria', lastname: 'Garcia',age: 28},
    {id: 4, name: 'Julio', lastname: 'Rodrigez',age: 35}
   ];
    of(mockCharacters).subscribe((result) => {
        result.forEach((character) =>
          this.state().characters.set(character.id,character)
      );
        this.state.set({characters:this.state().characters});
      });

  }

  updateCharacter(character:Character): void {
    const updateCharacter = {...character};

   of(updateCharacter).subscribe((result =>{
    this.state.update((state) =>{
      state.characters.set(result.id,result);
      return{characters:state.characters};
    });
   }));
   this.getCharacters()
  }


  deleteCharacter(id:number): void{
    of({status:200})
    .subscribe(()=>{
      this.state.update((state) => {
        state.characters.delete(id);
        return { characters: state.characters };
      })
    })
    }
}
