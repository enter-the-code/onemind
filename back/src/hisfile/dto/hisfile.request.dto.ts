import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class HisFile {
  @ApiProperty({
    example: '실시간 야붕이 썰풀어 본다',
    description: 'title',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '컨텐츠 내용입니다.....',
    description: '컨텐츠 내용',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  tag: string;
}
