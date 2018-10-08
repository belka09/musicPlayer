"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.JsonSongs = require('./../songs.json');
        this.items = JSON.parse(JSON.stringify(this.JsonSongs));
    }
    ItemService.prototype.getItems = function () {
        return this.items.posts.map(function (el) {
            return {
                id: el.id,
                name: el.title,
                image: el.image,
                src: el.enclosure
            };
        });
    };
    ItemService.prototype.getItem = function (id) {
        this.getItems().find(function (song) { return song.id === id; });
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDO0lBSUk7UUFITyxjQUFTLEdBQVEsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUc5RCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFO1lBQzNCLE1BQU0sQ0FBQztnQkFDSCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDZixHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVM7YUFDcEIsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFwQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHB1YmxpYyBKc29uU29uZ3M6IGFueSA9IHJlcXVpcmUoJy4vLi4vc29uZ3MuanNvbicpO1xuICAgIHB1YmxpYyBpdGVtczphbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuSnNvblNvbmdzKSk7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucG9zdHMubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogZWwuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZWwudGl0bGUsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGVsLmltYWdlLFxuICAgICAgICAgICAgICAgIHNyYzogZWwuZW5jbG9zdXJlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQpOmFueSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXMoKS5maW5kKHNvbmcgPT4gc29uZy5pZCA9PT0gaWQpO1xuICAgIH1cbn1cbiJdfQ==