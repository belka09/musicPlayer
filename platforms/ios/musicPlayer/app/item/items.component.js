"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
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
        if (platform_1.isIOS) {
            item.progress = item.progress + 10;
        }
        else {
            item.progress = item.progress / 1000 + 10;
        }
        item.player.seekTo(item.progress);
    };
    ItemsComponent.prototype.rewind = function (item) {
        if (platform_1.isIOS) {
            item.progress = item.progress - 10;
        }
        else {
            item.progress = item.progress / 1000 - 10;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFrRDtBQUVsRCwrQ0FBNkM7QUFFN0MsU0FBUztBQUNULHlEQUErQztBQVEvQztJQU9FLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFpQnRCLFlBQU8sR0FBVSxDQUFDLENBQUM7SUFmcUIsQ0FBQztJQUV6QyxpQ0FBUSxHQUFmO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLGtDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksYUFBYSxHQUFHO1lBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNu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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiOyBcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuLy8gcGxheWVyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWF1ZGlvXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2l0ZW1zLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpdGVtczogYW55O1xuICBwdWJsaWMgcGxheWVyOiBhbnk7XG4gIHByaXZhdGUgc3RhdGVQYW46bnVtYmVyID0gMztcbiAgcHVibGljIGlzUGxheWluZzpib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzcGlubmVyQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nO1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IDA7XG4gICAgICBpdGVtLnBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICAgIGl0ZW0uZHVyYXRpb24gPSAxO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdGhpcy5zcGlubmVyQWN0aXZlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGN1cnJlbnQ6bnVtYmVyID0gMDtcbiAgcHVibGljIHBsYXlQYXVzZShpdGVtKSB7XG4gICAgaXRlbS5zcGlubmVyQWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGF1ZGlvRmlsZTogaXRlbS5zcmMsXG4gICAgICBsb29wOiBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgIH07XG4gICAgaWYgKGl0ZW0ucGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgIGl0ZW0ucGxheWVyLnBhdXNlKCk7XG4gICAgICBpdGVtLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgaXRlbS5zcGlubmVyQWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucGxheWVyXG4gICAgICAgIC5wbGF5RnJvbVVybChwbGF5ZXJPcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaXRlbS5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgIGl0ZW0uc3Bpbm5lckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW0uaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBsYXllci5nZXRBdWRpb1RyYWNrRHVyYXRpb24oKS50aGVuKChkdXJhdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlUGFuID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kdXJhdGlvbiA9IGR1cmF0aW9uIC8gMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gaXRlbS5wbGF5ZXIuY3VycmVudFRpbWU7XG4gICAgICAgICAgICAgICAgaXRlbS5wcm9ncmVzcyA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpdGVtLmlzUGxheWluZyA9IGl0ZW0ucGxheWVyLmlzQXVkaW9QbGF5aW5nKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nLi4uXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIGZvcndhcmQoaXRlbSkge1xuICAgIGlmIChpc0lPUykge1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3MgKyAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3MgLyAxMDAwICsgMTA7XG4gICAgfVxuICAgIGl0ZW0ucGxheWVyLnNlZWtUbyhpdGVtLnByb2dyZXNzKTtcbiAgfVxuXG4gIHB1YmxpYyByZXdpbmQoaXRlbSkge1xuICAgIGlmIChpc0lPUykge1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3MgLSAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5wcm9ncmVzcyA9IGl0ZW0ucHJvZ3Jlc3MgLyAxMDAwIC0gMTA7XG4gICAgfVxuICAgIGl0ZW0ucGxheWVyLnNlZWtUbyhpdGVtLnByb2dyZXNzKTtcbiAgfVxufVxuIl19