import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { VoteDirection } from '../entities/vote.entity';

export class CastVoteDto {
  @ApiProperty({
    enum: VoteDirection,
    description: 'The direction of the vote',
    example: VoteDirection.FOR,
  })
  @IsEnum(VoteDirection)
  @IsNotEmpty()
  direction: VoteDirection;
}
