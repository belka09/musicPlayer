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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELCtDQUE2QztBQUU3QyxTQUFTO0FBQ1QseURBQStDO0FBUS9DO0lBT0Usd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWlCdEIsWUFBTyxHQUFVLENBQUMsQ0FBQztJQWZxQixDQUFDO0lBRXpDLGlDQUFRLEdBQWY7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR00sa0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFnQ0M7UUEvQkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxhQUFhLEdBQUc7WUFDbEIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ25CLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU07aUJBQ1IsV0FBVyxDQUFDLGFBQWEsQ0FBQztpQkFDMUIsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBYTt3QkFDckQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7NEJBQzlCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUNoRCxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBUyxHQUFHO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFHTSxnQ0FBTyxHQUFkLFVBQWUsSUFBSTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBbEVVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBUWlDLDBCQUFXO09BUGpDLGNBQWMsQ0FtRTFCO0lBQUQscUJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuLy8gcGxheWVyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1ZGlvXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2l0ZW1zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpdGVtczogYW55O1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG4gIHByaXZhdGUgc3RhdGVQYW46bnVtYmVyID0gMztcbiAgcHVibGljIGlzUGxheWluZzpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzcGlubmVyQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nO1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IDA7XG4gICAgICBpdGVtLnBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICAgIGl0ZW0uZHVyYXRpb24gPSAxO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdGhpcy5zcGlubmVyQWN0aXZlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGN1cnJlbnQ6bnVtYmVyID0gMDtcbiAgcHVibGljIHBsYXlQYXVzZShpdGVtKSB7XG4gICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGF1ZGlvRmlsZTogaXRlbS5zcmMsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgIH07XG4gICAgaWYgKGl0ZW0ucGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgIGl0ZW0ucGxheWVyLnBhdXNlKCk7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucGxheWVyXG4gICAgICAgIC5wbGF5RnJvbVVybChwbGF5ZXJPcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaXRlbS5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgIGl0ZW0uc3Bpbm5lckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW0uaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKChkdXJhdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlUGFuID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaXRlbS5wbGF5ZXIuY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgaXRlbS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpdGVtLmlzUGxheWluZyA9IGl0ZW0ucGxheWVyLmlzQXVkaW9QbGF5aW5nKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nLi4uXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIGZvcndhcmQoaXRlbSkge1xuICAgIGl0ZW0ucHJvZ3Jlc3MgPSBpdGVtLnByb2dyZXNzIC8gMTAwMCArIDEwO1xuICAgIGl0ZW0ucGxheWVyLnNlZWtUbyhpdGVtLnByb2dyZXNzKTtcbiAgfVxuXG4gIHB1YmxpYyByZXdpbmQoaXRlbSkge1xuICAgIGl0ZW0ucHJvZ3Jlc3MgPSBpdGVtLnByb2dyZXNzIC8gMTAwMCAtIDEwO1xuICAgIGl0ZW0ucGxheWVyLnNlZWtUbyhpdGVtLnByb2dyZXNzKTtcbiAgfVxufVxuIl19