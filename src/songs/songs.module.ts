import { SongsController } from "./songs.controller";
import { Module } from "@nestjs/common";
import { SongsService } from "./songs.service";

const mockSongsService = {
  findAll() {
    return [{
      id: 1,
      title: "Lasting lover"
    }];
  },
};
@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: SongsService,
      useValue: mockSongsService,
    },
  ],
})
export class SongsModule {}