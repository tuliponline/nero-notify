import { NotificationType } from '../enums/notification-type.enum';
export declare class NotifyDto {
    message: string;
    type: NotificationType;
    imageUrl?: string;
    stickerPackageId?: string;
    stickerId?: string;
}
