// Original file: proto/mwp/demo/mwp_demo_main.proto
/* eslint-disable */
import {ApiProperty} from '@nestjs/swagger';


export interface AccountBo {
  'id'?: (number);
  'username'?: (string);
  'nickname'?: (string);
  'address'?: (string);
  'photo'?: (string);
}

export interface AccountBo__Output {
/*test*/
  'id': (number);
  'username': (string);
  'nickname': (string);
  'address': (string);
  'photo': (string);
}


export class AccountBoDto {
  @ApiProperty()
  'id': (number);
  @ApiProperty()
  'username': (string);
  @ApiProperty()
  'nickname': (string);
  @ApiProperty()
  'address': (string);
  @ApiProperty()
  'photo': (string);
}
export class AccountBo__OutputDto {
  @ApiProperty()
  'id': (number);
  @ApiProperty()
  'username': (string);
  @ApiProperty()
  'nickname': (string);
  @ApiProperty()
  'address': (string);
  @ApiProperty()
  'photo': (string);
}
