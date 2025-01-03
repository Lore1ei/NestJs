import {
  connection
} from 'src/constants/connection';
import { Module } from "@nestjs/common";
import { SongsController } from "./songs.controller";
import { SongsService } from "./songs.service";

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
