import { Character } from './modules/character.model';
import { CharacterService } from './services/character-service';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-serves';
  characterService = inject (CharacterService);

  characters:Signal<Character[] | undefined >= computed(() =>
    this.characterService.getFormattedCharacters(),
 );
  

}
