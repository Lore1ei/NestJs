import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song.dto";

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        const result = this.songsService.create(createSongDto)
        return result
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (e) {
            throw new HttpException(
              'server error',
              HttpStatus.INTERNAL_SERVER_ERROR, { cause: e }
            );
        }
    }

    @Get(":id")
    findOne(
      @Param('id', new ParseIntPipe({
          errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      })) id: number,
    ){
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
