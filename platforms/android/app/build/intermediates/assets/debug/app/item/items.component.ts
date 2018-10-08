import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Progress } from "tns-core-modules/ui/progress";

// player
import { TNSPlayer } from "nativescript-audio";
import { isIOS } from "tns-core-modules/platform";

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
      // item.player = new TNSPlayer();
      // let playerOptions = {
      //   audioFile: item.src,
      //   loop: false,
      //   autoplay: false
      // };
      // item.player
      //   .initFromUrl(playerOptions)
      //   .then(res => {
      //     setInterval(() => {
      //       item.player.getAudioTrackDuration().then((duration: any) => {
      //         item.duration = duration;
      //         let current = item.player.currentTime;
      //         if (isIOS) {
      //           duration *= 1000;
      //           current *= 1000;
      //         }
      //         item.progress = current;
      //         item.isPlaying = item.player.isAudioPlaying();
      //       });
      //     }, 200);
      //   })
      //   .catch(err => {
      //     console.log("something went wrong...", err);
      //   });
    });
  }
  // public playPause(item) {
  //   if (item.player.isAudioPlaying()) {
  //     item.player.pause();
  //     item.isPlaying = !item.isPlaying;
  //   } else {
  //     item.player.play();
  //     item.isPlaying = !item.isPlaying;
  //   }
  // }
  public playPause(item) {
    console.log('playpause');
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
                let current = item.player.currentTime;
                // if (isIOS) {
                //   duration *= 10;
                //   current *= 10;
                // }
                item.progress = current;
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
    console.log(item.progress)
    item.progress = item.progress + 15;
    item.player.seekTo(this.items.progress);
    console.log(item.progress)
  }

  public rewind(item) {
    item.progress = item.progress - 5;
  }
  // public onSliderLoaded(args, item) {
  //   const sliderComponent: any = <any>args.object;
  //   sliderComponent.on("valueChange", sargs => {
  //     if (this.statePan !== 3) {
  //       const page = (<any>sargs.object).page;
  //       const vm = page.bindingContext;
  //       if(isIOS){
  //         item.player.seekTo((<any>sargs.object).value * 100);
  //       } else {
  //         item.player.seekTo((<any>sargs.object).value / 1000);
  //       }
  //     }
  //   });
  // }

  // public touchDown(args: any, item) {
  //   this.statePan = args.state;
  // }
}
