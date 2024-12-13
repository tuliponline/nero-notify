import { Injectable } from '@nestjs/common';
import { NotifyDto } from './dto/notify.dto';
import { NotificationStorageService } from './services/notification-storage.service';
import { PaginatedNotificationsResponseDto } from './dto/notification-response.dto';

@Injectable()
export class NotificationsService {
  constructor(
    private notificationStorageService: NotificationStorageService,
  ) {}

  async sendNotification(token: string, notifyDto: NotifyDto) {
    // Save notification to database
    await this.notificationStorageService.saveNotification(token, notifyDto);
    
    // TODO: Implement actual notification sending logic here
    console.log('Sending notification:', {
      token,
      message: notifyDto.message,
      ...notifyDto,
    });

    return {
      status: 200,
      message: 'Notification sent successfully',
    };
  }

  async getNotifications(
    token: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<PaginatedNotificationsResponseDto> {
    return this.notificationStorageService.getNotifications(token, page, limit);
  }
}