import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
  // provider : 각각의 서비스, 핼퍼, factory 등의 의존성을 부여 해당 값을 부여하면서 다른 서비스를 불러 올 수 도 있음
  // 서비스를 다른 컨트롤러에 의존성을 줄 수 있는 방법은 해당 서비스를 어디든 접근 가능하게 만들 수 있는 것
})
export class BoardsModule {}
