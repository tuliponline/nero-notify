import { NotificationsService } from './notifications.service';
import { NotifyDto } from './dto/notify.dto';
import { GetNotificationsDto } from './dto/get-notifications.dto';
import { PaginatedNotificationsResponseDto } from './dto/notification-response.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    notify(auth: string, notifyDto: NotifyDto): Promise<{
        status: number;
        message: string;
    }>;
    getNotifications(auth: string, query: GetNotificationsDto): Promise<PaginatedNotificationsResponseDto>;
}
