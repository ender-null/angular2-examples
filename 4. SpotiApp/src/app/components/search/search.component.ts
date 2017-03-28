import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  query:string = "";

  constructor(private _spotifyService:SpotifyService) { }

  artistSearch(){
    this._spotifyService.getArtists(this.query)
      .subscribe();
  }

}
