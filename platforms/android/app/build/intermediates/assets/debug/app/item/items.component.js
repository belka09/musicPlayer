"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
// player
var nativescript_audio_1 = require("nativescript-audio");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.statePan = 3;
        this.isPlaying = false;
        this.spinnerActive = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.player = new nativescript_audio_1.TNSPlayer();
        this.items = this.itemService.getItems();
        this.items.forEach(function (item) {
            item.isPlaying = _this.isPlaying;
            item.progress = 0;
            item.player = new nativescript_audio_1.TNSPlayer();
            item.duration = 1;
            item.spinnerActive = _this.spinnerActive;
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
    };
    // public playPause(item) {
    //   if (item.player.isAudioPlaying()) {
    //     item.player.pause();
    //     item.isPlaying = !item.isPlaying;
    //   } else {
    //     item.player.play();
    //     item.isPlaying = !item.isPlaying;
    //   }
    // }
    ItemsComponent.prototype.playPause = function (item) {
        var _this = this;
        console.log('playpause');
        item.spinnerActive = true;
        var playerOptions = {
            audioFile: item.src,
            loop: false,
            autoplay: false
        };
        if (item.player.isAudioPlaying()) {
            item.player.pause();
            item.isPlaying = false;
            item.spinnerActive = false;
        }
        else {
            item.player
                .playFromUrl(playerOptions)
                .then(function (res) {
                item.isPlaying = true;
                item.spinnerActive = false;
                item.interval = setInterval(function () {
                    item.player.getAudioTrackDuration().then(function (duration) {
                        if (_this.statePan === 3) {
                            item.duration = duration / 10;
                            var current = item.player.currentTime;
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
                .catch(function (err) {
                console.log("something went wrong...", err);
            });
        }
    };
    ItemsComponent.prototype.forward = function (item) {
        console.log(item.progress);
        item.progress = item.progress + 15;
        item.player.seekTo(this.items.progress);
        console.log(item.progress);
    };
    ItemsComponent.prototype.rewind = function (item) {
        item.progress = item.progress - 5;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ['./items.component.css']
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUc3QyxTQUFTO0FBQ1QseURBQStDO0FBUy9DO0lBT0Usd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUVrQixDQUFDO0lBRXpDLGlDQUFRLEdBQWY7UUFBQSxpQkFvQ0M7UUFuQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUN4QyxpQ0FBaUM7WUFDakMsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLEtBQUs7WUFDTCxjQUFjO1lBQ2QsZ0NBQWdDO1lBQ2hDLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsc0VBQXNFO1lBQ3RFLG9DQUFvQztZQUNwQyxpREFBaUQ7WUFDakQsdUJBQXVCO1lBQ3ZCLDhCQUE4QjtZQUM5Qiw2QkFBNkI7WUFDN0IsWUFBWTtZQUNaLG1DQUFtQztZQUNuQyx5REFBeUQ7WUFDekQsWUFBWTtZQUNaLGVBQWU7WUFDZixPQUFPO1lBQ1Asb0JBQW9CO1lBQ3BCLG1EQUFtRDtZQUNuRCxRQUFRO1FBQ1YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4QywyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsd0NBQXdDO0lBQ3hDLE1BQU07SUFDTixJQUFJO0lBQ0csa0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFxQ0M7UUFwQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLGFBQWEsR0FBRztZQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDbkIsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTTtpQkFDUixXQUFXLENBQUMsYUFBYSxDQUFDO2lCQUMxQixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFhO3dCQUNyRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQzs0QkFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7NEJBQ3RDLGVBQWU7NEJBQ2Ysb0JBQW9COzRCQUNwQixtQkFBbUI7NEJBQ25CLElBQUk7NEJBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDaEQsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQVMsR0FBRztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBR00sZ0NBQU8sR0FBZCxVQUFlLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF4R1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FRaUMsMEJBQVc7T0FQakMsY0FBYyxDQTJIMUI7SUFBRCxxQkFBQztDQUFBLEFBM0hELElBMkhDO0FBM0hZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIjtcblxuLy8gcGxheWVyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1ZGlvXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2l0ZW1zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpdGVtczogYW55O1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG4gIHByaXZhdGUgc3RhdGVQYW46bnVtYmVyID0gMztcbiAgcHVibGljIGlzUGxheWluZzpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzcGlubmVyQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nO1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IDA7XG4gICAgICBpdGVtLnBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICAgIGl0ZW0uZHVyYXRpb24gPSAxO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdGhpcy5zcGlubmVyQWN0aXZlO1xuICAgICAgLy8gaXRlbS5wbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgICAvLyBsZXQgcGxheWVyT3B0aW9ucyA9IHtcbiAgICAgIC8vICAgYXVkaW9GaWxlOiBpdGVtLnNyYyxcbiAgICAgIC8vICAgbG9vcDogZmFsc2UsXG4gICAgICAvLyAgIGF1dG9wbGF5OiBmYWxzZVxuICAgICAgLy8gfTtcbiAgICAgIC8vIGl0ZW0ucGxheWVyXG4gICAgICAvLyAgIC5pbml0RnJvbVVybChwbGF5ZXJPcHRpb25zKVxuICAgICAgLy8gICAudGhlbihyZXMgPT4ge1xuICAgICAgLy8gICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vICAgICAgIGl0ZW0ucGxheWVyLmdldEF1ZGlvVHJhY2tEdXJhdGlvbigpLnRoZW4oKGR1cmF0aW9uOiBhbnkpID0+IHtcbiAgICAgIC8vICAgICAgICAgaXRlbS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgLy8gICAgICAgICBsZXQgY3VycmVudCA9IGl0ZW0ucGxheWVyLmN1cnJlbnRUaW1lO1xuICAgICAgLy8gICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgIC8vICAgICAgICAgICBkdXJhdGlvbiAqPSAxMDAwO1xuICAgICAgLy8gICAgICAgICAgIGN1cnJlbnQgKj0gMTAwMDtcbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICBpdGVtLnByb2dyZXNzID0gY3VycmVudDtcbiAgICAgIC8vICAgICAgICAgaXRlbS5pc1BsYXlpbmcgPSBpdGVtLnBsYXllci5pc0F1ZGlvUGxheWluZygpO1xuICAgICAgLy8gICAgICAgfSk7XG4gICAgICAvLyAgICAgfSwgMjAwKTtcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZy4uLlwiLCBlcnIpO1xuICAgICAgLy8gICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyBwdWJsaWMgcGxheVBhdXNlKGl0ZW0pIHtcbiAgLy8gICBpZiAoaXRlbS5wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKSkge1xuICAvLyAgICAgaXRlbS5wbGF5ZXIucGF1c2UoKTtcbiAgLy8gICAgIGl0ZW0uaXNQbGF5aW5nID0gIWl0ZW0uaXNQbGF5aW5nO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBpdGVtLnBsYXllci5wbGF5KCk7XG4gIC8vICAgICBpdGVtLmlzUGxheWluZyA9ICFpdGVtLmlzUGxheWluZztcbiAgLy8gICB9XG4gIC8vIH1cbiAgcHVibGljIHBsYXlQYXVzZShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXlwYXVzZScpO1xuICAgIGl0ZW0uc3Bpbm5lckFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IHBsYXllck9wdGlvbnMgPSB7XG4gICAgICBhdWRpb0ZpbGU6IGl0ZW0uc3JjLFxuICAgICAgbG9vcDogZmFsc2UsXG4gICAgICBhdXRvcGxheTogZmFsc2VcbiAgICB9O1xuICAgIGlmIChpdGVtLnBsYXllci5pc0F1ZGlvUGxheWluZygpKSB7XG4gICAgICBpdGVtLnBsYXllci5wYXVzZSgpO1xuICAgICAgaXRlbS5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGl0ZW0uc3Bpbm5lckFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnBsYXllclxuICAgICAgICAucGxheUZyb21VcmwocGxheWVyT3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGl0ZW0uaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICBpdGVtLnNwaW5uZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBpdGVtLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5wbGF5ZXIuZ2V0QXVkaW9UcmFja0R1cmF0aW9uKCkudGhlbigoZHVyYXRpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVBhbiA9PT0gMykge1xuICAgICAgICAgICAgICAgIGl0ZW0uZHVyYXRpb24gPSBkdXJhdGlvbiAvIDEwO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaXRlbS5wbGF5ZXIuY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICAgICAgLy8gICBkdXJhdGlvbiAqPSAxMDtcbiAgICAgICAgICAgICAgICAvLyAgIGN1cnJlbnQgKj0gMTA7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGl0ZW0ucHJvZ3Jlc3MgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNQbGF5aW5nID0gaXRlbS5wbGF5ZXIuaXNBdWRpb1BsYXlpbmcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3JvbmcuLi5cIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgZm9yd2FyZChpdGVtKSB7XG4gICAgY29uc29sZS5sb2coaXRlbS5wcm9ncmVzcylcbiAgICBpdGVtLnByb2dyZXNzID0gaXRlbS5wcm9ncmVzcyArIDE1O1xuICAgIGl0ZW0ucGxheWVyLnNlZWtUbyh0aGlzLml0ZW1zLnByb2dyZXNzKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtLnByb2dyZXNzKVxuICB9XG5cbiAgcHVibGljIHJld2luZChpdGVtKSB7XG4gICAgaXRlbS5wcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3MgLSA1O1xuICB9XG4gIC8vIHB1YmxpYyBvblNsaWRlckxvYWRlZChhcmdzLCBpdGVtKSB7XG4gIC8vICAgY29uc3Qgc2xpZGVyQ29tcG9uZW50OiBhbnkgPSA8YW55PmFyZ3Mub2JqZWN0O1xuICAvLyAgIHNsaWRlckNvbXBvbmVudC5vbihcInZhbHVlQ2hhbmdlXCIsIHNhcmdzID0+IHtcbiAgLy8gICAgIGlmICh0aGlzLnN0YXRlUGFuICE9PSAzKSB7XG4gIC8vICAgICAgIGNvbnN0IHBhZ2UgPSAoPGFueT5zYXJncy5vYmplY3QpLnBhZ2U7XG4gIC8vICAgICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgLy8gICAgICAgaWYoaXNJT1Mpe1xuICAvLyAgICAgICAgIGl0ZW0ucGxheWVyLnNlZWtUbygoPGFueT5zYXJncy5vYmplY3QpLnZhbHVlICogMTAwKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpdGVtLnBsYXllci5zZWVrVG8oKDxhbnk+c2FyZ3Mub2JqZWN0KS52YWx1ZSAvIDEwMDApO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBwdWJsaWMgdG91Y2hEb3duKGFyZ3M6IGFueSwgaXRlbSkge1xuICAvLyAgIHRoaXMuc3RhdGVQYW4gPSBhcmdzLnN0YXRlO1xuICAvLyB9XG59XG4iXX0=