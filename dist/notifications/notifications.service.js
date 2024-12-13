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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const notification_storage_service_1 = require("./services/notification-storage.service");
let NotificationsService = class NotificationsService {
    constructor(notificationStorageService) {
        this.notificationStorageService = notificationStorageService;
    }
    async sendNotification(token, notifyDto) {
        await this.notificationStorageService.saveNotification(token, notifyDto);
        console.log('Sending notification:', {
            token,
            message: notifyDto.message,
            ...notifyDto,
        });
        return {
            status: 200,
            message: 'Notification sent successfully',
        };
    }
    async getNotifications(token, page = 1, limit = 10) {
        return this.notificationStorageService.getNotifications(token, page, limit);
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_storage_service_1.NotificationStorageService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map