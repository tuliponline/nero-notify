import { NotificationRepository } from '../repositories/notification.repository';
import { NotifyDto } from '../dto/notify.dto';
import { Notification } from '../entities/notification.entity';
import { PaginatedNotificationsResponseDto } from '../dto/notification-response.dto';
import { NotificationType } from '../enums/notification-type.enum';
export declare class NotificationStorageService {
    private notificationRepository;
    constructor(notificationRepository: NotificationRepository);
    saveNotification(token: string, notifyDto: NotifyDto): Promise<Notification>;
    getNotifications(token: string, page: number, limit: number, type?: NotificationType): Promise<PaginatedNotificationsResponseDto>;
}
