import { NotifyDto } from './dto/notify.dto';
import { NotificationStorageService } from './services/notification-storage.service';
import { PaginatedNotificationsResponseDto } from './dto/notification-response.dto';
export declare class NotificationsService {
    private notificationStorageService;
    constructor(notificationStorageService: NotificationStorageService);
    sendNotification(token: string, notifyDto: NotifyDto): Promise<{
        status: number;
        message: string;
    }>;
    getNotifications(token: string, page?: number, limit?: number): Promise<PaginatedNotificationsResponseDto>;
}
