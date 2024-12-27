import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { SongsService } from "./songs.service";

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    create(){
        return this.songsService.create('Animals by Martin');
    }

    @Get()
    findAll(){
        return this.songsService.findAll();
    }
    @Get(":id")
    findOne(){
        return "fetch song on the based on id";
    }
    @Put(":id")
    update() {
        return "update song on the based on id";
    }
    @Delete(":id")
    delete() {
        return "delete a song on the based on id";
    }
}
