import { Repository, DataSource } from 'typeorm';
import { Notification } from '../entities/notification.entity';
export declare class NotificationRepository extends Repository<Notification> {
    private dataSource;
    constructor(dataSource: DataSource);
    createNotification(token: string, message: string, imageUrl?: string, stickerPackageId?: string, stickerId?: string): Promise<Notification>;
    getNotificationsByToken(token: string, page: number, limit: number): Promise<[Notification[], number]>;
}
