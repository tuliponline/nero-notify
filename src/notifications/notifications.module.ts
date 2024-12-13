import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { NotificationStorageService } from './services/notification-storage.service';
import { NotificationRepository } from './repositories/notification.repository';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]),
  ],
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    NotificationStorageService,
    NotificationRepository,
  ],
})
export class NotificationsModule {}