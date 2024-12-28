import { Injectable } from '@nestjs/common';
import { CreateSongDto } from "./dto/create-song.dto";

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song: CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
