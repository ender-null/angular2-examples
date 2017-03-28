import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

    artist: any;
    tracks: any[];

    constructor(private activatedRoute: ActivatedRoute,
        private _spotifyService: SpotifyService) { }

    ngOnInit() {
        this.activatedRoute.params
            .map(params => params['id'])
            .subscribe(id => {
                this._spotifyService.getArtist(id)
                    .subscribe(data => this.artist = data);

                this._spotifyService.getTop(id)
                    .subscribe(data => this.tracks = data);
            })
    }

}
