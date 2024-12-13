import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { NotifyDto } from '../dto/notify.dto';
import { Notification } from '../entities/notification.entity';
import { PaginatedNotificationsResponseDto } from '../dto/notification-response.dto';
import { NotificationType } from '../enums/notification-type.enum';

@Injectable()
export class NotificationStorageService {
  constructor(private notificationRepository: NotificationRepository) {}

  async saveNotification(token: string, notifyDto: NotifyDto): Promise<Notification> {
    return this.notificationRepository.createNotification(
      token,
      notifyDto.message,
      notifyDto.type,
      notifyDto.imageUrl,
      notifyDto.stickerPackageId,
      notifyDto.stickerId,
    );
  }

  async getNotifications(
    token: string,
    page: number,
    limit: number,
    type?: NotificationType,
  ): Promise<PaginatedNotificationsResponseDto> {
    const [notifications, total] = await this.notificationRepository.getNotificationsByToken(
      token,
      page,
      limit,
      type,
    );

    return {
      items: notifications,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}