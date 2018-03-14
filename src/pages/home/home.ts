import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SongsService } from '../../providers/songs/songs';
import { Song } from '../../models/song/song.interface';
import { SONG_LIST } from '../../mocks/songs/songs.mock';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  songs: Song[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private SongsService: SongsService, private LoadingProvider: LoadingProvider) {
    this.LoadingProvider.startLoad();

    this.SongsService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    })

    this.LoadingProvider.endLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
