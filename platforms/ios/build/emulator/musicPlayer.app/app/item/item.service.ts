import { Injectable } from "@angular/core";

@Injectable()
export class ItemService {
    public JsonSongs: any = require('./../songs.json');
    public items:any = JSON.parse(JSON.stringify(this.JsonSongs));

    constructor(){
    }

    getItems(): any[] {
        return this.items.posts.map((el) => {
            return {
                id: el.id,
                name: el.title,
                image: el.image,
                src: el.enclosure
            }
        });
    }

    getItem(id):any {
        this.getItems().find(song => song.id === id);
    }
}
