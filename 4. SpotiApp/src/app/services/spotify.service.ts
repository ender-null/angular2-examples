import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any [] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";
  artistUrl:string = "https://api.spotify.com/v1/artists";

  constructor(private http:Http) { }

  getArtists( query:string ){
    let parsedQuery = `?q=${ query }&type=artist`;
    let url = this.searchUrl + parsedQuery;

    return this.http.get( url )
      .map(res => {
        this.artists = res.json().artists.items
        return res.json().artists.items;
      })
  }

  getArtist( id:string ){
    let parsedQuery = `/${ id }`;
    let url = this.artistUrl + parsedQuery;

    return this.http.get( url )
      .map(res => {
        return res.json();
      })
  }

  getTop( id:string ){
    let parsedQuery = `/${ id }/top-tracks?country=US`;
    let url = this.artistUrl + parsedQuery;

    return this.http.get( url )
      .map(res => {
        return res.json().tracks;
      })
  }

}
