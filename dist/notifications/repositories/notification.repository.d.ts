import { Repository, DataSource } from 'typeorm';
import { Notification } from '../entities/notification.entity';
import { NotificationType } from '../enums/notification-type.enum';
export declare class NotificationRepository extends Repository<Notification> {
    private dataSource;
    constructor(dataSource: DataSource);
    createNotification(token: string, message: string, type?: NotificationType, imageUrl?: string, stickerPackageId?: string, stickerId?: string): Promise<Notification>;
    getNotificationsByToken(token: string, page: number, limit: number, type?: NotificationType): Promise<[Notification[], number]>;
}
