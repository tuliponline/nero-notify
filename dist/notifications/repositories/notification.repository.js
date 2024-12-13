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
exports.NotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("../entities/notification.entity");
let NotificationRepository = class NotificationRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(notification_entity_1.Notification, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createNotification(token, message, imageUrl, stickerPackageId, stickerId) {
        const notification = this.create({
            token,
            message,
            imageUrl,
            stickerPackageId,
            stickerId,
        });
        return this.save(notification);
    }
    async getNotificationsByToken(token, page, limit) {
        const skip = (page - 1) * limit;
        const [notifications, total] = await this.findAndCount({
            where: { token },
            order: { createdAt: 'DESC' },
            skip,
            take: limit,
        });
        return [notifications, total];
    }
};
exports.NotificationRepository = NotificationRepository;
exports.NotificationRepository = NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], NotificationRepository);
//# sourceMappingURL=notification.repository.js.map