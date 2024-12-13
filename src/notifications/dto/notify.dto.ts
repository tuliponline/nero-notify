import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NotifyDto {
  @ApiProperty({
    description: 'The message to be sent',
    example: 'Hello from the notification service!',
  })
  @IsString()
  message: string;

  @ApiProperty({
    description: 'Optional image URL to be included in the notification',
    required: false,
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    description: 'Optional sticker package ID',
    required: false,
    example: '1',
  })
  @IsOptional()
  @IsString()
  stickerPackageId?: string;

  @ApiProperty({
    description: 'Optional sticker ID',
    required: false,
    example: '1',
  })
  @IsOptional()
  @IsString()
  stickerId?: string;
}