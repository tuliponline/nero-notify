export declare class NotificationResponseDto {
    id: number;
    message: string;
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
