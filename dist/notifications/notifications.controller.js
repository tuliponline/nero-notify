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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const notifications_service_1 = require("./notifications.service");
const notify_dto_1 = require("./dto/notify.dto");
const get_notifications_dto_1 = require("./dto/get-notifications.dto");
const notification_response_dto_1 = require("./dto/notification-response.dto");
let NotificationsController = class NotificationsController {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    async notify(auth, notifyDto) {
        if (!auth) {
            throw new common_1.UnauthorizedException('Access token is required');
        }
        const token = auth.replace('Bearer ', '');
        return this.notificationsService.sendNotification(token, notifyDto);
    }
    async getNotifications(auth, query) {
        if (!auth) {
            throw new common_1.UnauthorizedException('Access token is required');
        }
        const token = auth.replace('Bearer ', '');
        return this.notificationsService.getNotifications(token, query.page, query.limit);
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Post)('notify'),
    (0, swagger_1.ApiOperation)({ summary: 'Send a notification' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Notification sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, notify_dto_1.NotifyDto]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "notify", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get notifications for the authenticated user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns paginated notifications',
        type: notification_response_dto_1.PaginatedNotificationsResponseDto
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, get_notifications_dto_1.GetNotificationsDto]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getNotifications", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, swagger_1.ApiTags)('notifications'),
    (0, common_1.Controller)('notifications'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map