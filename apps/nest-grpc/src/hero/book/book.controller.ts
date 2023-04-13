import { Metadata } from '@grpc/grpc-js';
import {
  Controller,
  Logger,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { GrpcMethod, Ctx } from '@nestjs/microservices';
import { FindBookReq } from '@nighttrax/proto/interface/wp/m1/FindBookReq';
import { FindBookResp } from '@nighttrax/proto/interface/wp/m1/FindBookResp';
import { AllExceptionsFilter } from 'src/common/exception/allexception/allexception.filter';
import { UserException } from 'src/common/exception/UserException';
import { TimestateInterceptor } from 'src/common/interceptor/timestate/timestate.interceptor';

@UseFilters(new AllExceptionsFilter()) // handle所有的错误.
@UseInterceptors(new TimestateInterceptor()) // 每个service的执行时间。
@Controller('book')
export class BookController {
  private readonly logger = new Logger('BookService');

  @GrpcMethod('BookService', 'FindBook')
  async FindBook(data: FindBookReq, metadata: Metadata): Promise<FindBookResp> {
    this.logger.log('tid', metadata.get('tid'));
    this.logger.log('FindBook param', data);
    // throw new UserException(100100101, 'Invalid credentials.');
    return {
      code: 1,
      msg: '',
      list: [
        {
          id: 1,
          title: '2',
          author: '3',
        },
      ],
    };
  }
}