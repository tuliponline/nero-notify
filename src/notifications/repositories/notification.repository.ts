import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Notification } from '../entities/notification.entity';

@Injectable()
export class NotificationRepository extends Repository<Notification> {
  constructor(private dataSource: DataSource) {
    super(Notification, dataSource.createEntityManager());
  }

  async createNotification(
    token: string,
    message: string,
    imageUrl?: string,
    stickerPackageId?: string,
    stickerId?: string,
  ): Promise<Notification> {
    const notification = this.create({
      token,
      message,
      imageUrl,
      stickerPackageId,
      stickerId,
    });

    return this.save(notification);
  }

  async getNotificationsByToken(
    token: string,
    page: number,
    limit: number,
  ): Promise<[Notification[], number]> {
    const skip = (page - 1) * limit;

    const [notifications, total] = await this.findAndCount({
      where: { token },
      order: { createdAt: 'DESC' },
      skip,
      take: limit,
    });

    return [notifications, total];
  }
}