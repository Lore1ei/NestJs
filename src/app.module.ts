import { MiddlewareConsumer, Module, NestMiddleware } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from "./common/middleware/logger/logger.middleware";
import { SongsController } from "./songs/songs.controller";
import { DevConfigService } from "./common/providers/DevConfigService";

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService, DevConfigService],
})
export class AppModule implements NestMiddleware{
  use(req: any, res: any, next: Function): any {}
  configure(consumer: MiddlewareConsumer) {
// consumer.apply(LoggerMiddleware).forRoutes('songs'); // option no 1
// consumer
// .apply(LoggerMiddleware)
// .forRoutes({ path: 'songs', method: RequestMethod.POST }); //option no 2
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); //option no 3
  }

}
