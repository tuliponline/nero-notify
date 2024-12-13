import { NotificationType } from '../enums/notification-type.enum';
export declare class NotificationResponseDto {
    id: number;
    message: string;
    type: NotificationType;
    imageUrl?: string;
    stickerPackageId?: string;
    stickerId?: string;
    createdAt: Date;
}
export declare class PaginatedNotificationsResponseDto {
    items: NotificationResponseDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
