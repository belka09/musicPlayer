import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";

// player
import { TNSPlayer } from "nativescript-audio";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items: any;
  public player: any;
  private statePan:number = 3;
  public isPlaying:boolean = false;
  public spinnerActive = false;

  constructor(private itemService: ItemService) {}

  public ngOnInit(): void {
    this.player = new TNSPlayer();
    this.items = this.itemService.getItems();

    this.items.forEach(item => {
      item.isPlaying = this.isPlaying;
      item.progress = 0;
      item.player = new TNSPlayer();
      item.duration = 1;
      item.spinnerActive = this.spinnerActive;
    });
  }

  public current:number = 0;
  public playPause(item) {
    item.spinnerActive = true;
    let playerOptions = {
      audioFile: item.src,
      loop: false,
      autoplay: false
    };
    if (item.player.isAudioPlaying()) {
      item.player.pause();
      item.isPlaying = false;
      item.spinnerActive = false;
    } else {
      item.player
        .playFromUrl(playerOptions)
        .then((res) => {
          item.isPlaying = true;
          item.spinnerActive = false;
          item.interval = setInterval(() => {
            item.player.getAudioTrackDuration().then((duration: any) => {
              if (this.statePan === 3) {
                item.duration = duration / 10;
                this.current = item.player.currentTime;
                item.progress = this.current;
                item.isPlaying = item.player.isAudioPlaying();
              }
            });
          }, 200);
        })
        .catch(function(err) {
          console.log("something went wrong...", err);
        });
    }
  }


  public forward(item) {
    item.progress = item.progress / 1000 + 10;
    item.player.seekTo(item.progress);
  }

  public rewind(item) {
    item.progress = item.progress / 1000 - 10;
    item.player.seekTo(item.progress);
  }
}
