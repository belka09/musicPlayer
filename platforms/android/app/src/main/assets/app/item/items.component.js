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
        this.current = 0;
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
        });
    };
    ItemsComponent.prototype.playPause = function (item) {
        var _this = this;
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
                            _this.current = item.player.currentTime;
                            // if (isIOS) {
                            //   duration *= 10;
                            //   current *= 10;
                            // }
                            item.progress = _this.current;
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
        item.progress = item.progress / 1000 + 10;
        item.player.seekTo(item.progress);
    };
    ItemsComponent.prototype.rewind = function (item) {
        item.progress = item.progress / 1000 - 10;
        item.player.seekTo(item.progress);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUc3QyxTQUFTO0FBQ1QseURBQStDO0FBUy9DO0lBT0Usd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWlCdEIsWUFBTyxHQUFVLENBQUMsQ0FBQztJQWZxQixDQUFDO0lBRXpDLGlDQUFRLEdBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR00sa0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFvQ0M7UUFuQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxhQUFhLEdBQUc7WUFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ25CLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU07aUJBQ1IsV0FBVyxDQUFDLGFBQWEsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBYTt3QkFDckQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7NEJBQzlCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7NEJBQ3ZDLGVBQWU7NEJBQ2Ysb0JBQW9COzRCQUNwQixtQkFBbUI7NEJBQ25CLElBQUk7NEJBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ2hELENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFTLEdBQUc7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUdNLGdDQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUF0RVUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0FRaUMsMEJBQVc7T0FQakMsY0FBYyxDQXVFMUI7SUFBRCxxQkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIjtcblxuLy8gcGxheWVyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1ZGlvXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2l0ZW1zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpdGVtczogYW55O1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG4gIHByaXZhdGUgc3RhdGVQYW46bnVtYmVyID0gMztcbiAgcHVibGljIGlzUGxheWluZzpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzcGlubmVyQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nO1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IDA7XG4gICAgICBpdGVtLnBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICAgIGl0ZW0uZHVyYXRpb24gPSAxO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdGhpcy5zcGlubmVyQWN0aXZlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGN1cnJlbnQ6bnVtYmVyID0gMDtcbiAgcHVibGljIHBsYXlQYXVzZShpdGVtKSB7XG4gICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGF1ZGlvRmlsZTogaXRlbS5zcmMsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgIH07XG4gICAgaWYgKGl0ZW0ucGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgIGl0ZW0ucGxheWVyLnBhdXNlKCk7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucGxheWVyXG4gICAgICAgIC5wbGF5RnJvbVVybChwbGF5ZXJPcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaXRlbS5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgIGl0ZW0uc3Bpbm5lckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW0uaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKChkdXJhdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlUGFuID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaXRlbS5wbGF5ZXIuY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgLy8gaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICAgICAgLy8gICBkdXJhdGlvbiAqPSAxMDtcbiAgICAgICAgICAgICAgICAvLyAgIGN1cnJlbnQgKj0gMTA7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGl0ZW0ucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaXRlbS5pc1BsYXlpbmcgPSBpdGVtLnBsYXllci5pc0F1ZGlvUGxheWluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZy4uLlwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBmb3J3YXJkKGl0ZW0pIHtcbiAgICBpdGVtLnByb2dyZXNzID0gaXRlbS5wcm9ncmVzcyAvIDEwMDAgKyAxMDtcbiAgICBpdGVtLnBsYXllci5zZWVrVG8oaXRlbS5wcm9ncmVzcyk7XG4gIH1cblxuICBwdWJsaWMgcmV3aW5kKGl0ZW0pIHtcbiAgICBpdGVtLnByb2dyZXNzID0gaXRlbS5wcm9ncmVzcyAvIDEwMDAgLSAxMDtcbiAgICBpdGVtLnBsYXllci5zZWVrVG8oaXRlbS5wcm9ncmVzcyk7XG4gIH1cbn1cbiJdfQ==