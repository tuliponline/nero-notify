import { NotificationType } from '../enums/notification-type.enum';
export declare class Notification {
    id: number;
    token: string;
    message: string;
    type: NotificationType;
    imageUrl: string;
    stickerPackageId: string;
    stickerId: string;
    createdAt: Date;
    updatedAt: Date;
}
