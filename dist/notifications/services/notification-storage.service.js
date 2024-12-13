"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationStorageService = void 0;
const common_1 = require("@nestjs/common");
const notification_repository_1 = require("../repositories/notification.repository");
let NotificationStorageService = class NotificationStorageService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    async saveNotification(token, notifyDto) {
        return this.notificationRepository.createNotification(token, notifyDto.message, notifyDto.type, notifyDto.imageUrl, notifyDto.stickerPackageId, notifyDto.stickerId);
    }
    async getNotifications(token, page, limit, type) {
        const [notifications, total] = await this.notificationRepository.getNotificationsByToken(token, page, limit, type);
        return {
            items: notifications,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
};
exports.NotificationStorageService = NotificationStorageService;
exports.NotificationStorageService = NotificationStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_repository_1.NotificationRepository])
], NotificationStorageService);
//# sourceMappingURL=notification-storage.service.js.map