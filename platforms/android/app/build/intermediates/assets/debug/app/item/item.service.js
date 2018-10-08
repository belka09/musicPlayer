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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDO0lBSUk7UUFITyxjQUFTLEdBQVEsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUc5RCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFO1lBQzNCLE1BQU0sQ0FBQztnQkFDSCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO2dCQUNkLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDZixHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVM7YUFDcEIsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFwQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBwdWJsaWMgSnNvblNvbmdzOiBhbnkgPSByZXF1aXJlKCcuLy4uL3NvbmdzLmpzb24nKTtcbiAgICBwdWJsaWMgaXRlbXM6YW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLkpzb25Tb25ncykpO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5wb3N0cy5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBlbC50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogZWwuaW1hZ2UsXG4gICAgICAgICAgICAgICAgc3JjOiBlbC5lbmNsb3N1cmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZCk6YW55IHtcbiAgICAgICAgdGhpcy5nZXRJdGVtcygpLmZpbmQoc29uZyA9PiBzb25nLmlkID09PSBpZCk7XG4gICAgfVxufVxuIl19