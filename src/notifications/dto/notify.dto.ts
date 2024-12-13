import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NotificationType } from '../enums/notification-type.enum';

export class NotifyDto {
  @ApiProperty({
    description: 'The message to be sent',
    example: 'Hello from the notification service!',
  })
  @IsString()
  message: string;

  @ApiProperty({
    description: 'The type of notification',
    enum: NotificationType,
    example: NotificationType.DEVICES_LOG,
    default: NotificationType.DEVICES_LOG
  })
  @IsEnum(NotificationType)
  @IsOptional()
  type: NotificationType = NotificationType.DEVICES_LOG;

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