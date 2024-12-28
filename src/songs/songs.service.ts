import { Inject, Injectable } from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { Connection } from "../constants/connection";

@Injectable()
export class SongsService {
  constructor(
    @Inject("CONNECTION")
    connection: Connection
  ) {
    console.log(connection.CONNECTION_STRING);
  }

  private readonly songs = [];

  create(song: CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
