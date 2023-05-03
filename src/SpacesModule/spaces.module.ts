import { Module } from '@nestjs/common';
import { CommonController } from './spaces.controller';
import { DoSpacesService } from './SpacesService/doSpaces.service';
import { DoSpacesServicerovider } from './SpacesService';

@Module({
  imports: [],
  controllers: [CommonController],
  // provide both the service and the custom provider
  providers: [DoSpacesServicerovider, DoSpacesService],
})
export class SpacesModule {}
