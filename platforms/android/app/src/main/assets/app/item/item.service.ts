import { Injectable } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import { Item } from "./item";

@Injectable()
export class ItemService {
    public JsonSongs: any = require('./../songs.json');
    public items:any = JSON.parse(JSON.stringify(this.JsonSongs));

    constructor(){
    }

    getItems(): Item[] {
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
