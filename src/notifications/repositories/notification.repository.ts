import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Notification } from '../entities/notification.entity';
import { NotificationType } from '../enums/notification-type.enum';

@Injectable()
export class NotificationRepository extends Repository<Notification> {
  constructor(private dataSource: DataSource) {
    super(Notification, dataSource.createEntityManager());
  }

  async createNotification(
    token: string,
    message: string,
    type: NotificationType = NotificationType.DEVICES_LOG,
    imageUrl?: string,
    stickerPackageId?: string,
    stickerId?: string,
  ): Promise<Notification> {
    const notification = this.create({
      token,
      message,
      type,
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
    type?: NotificationType,
  ): Promise<[Notification[], number]> {
    const skip = (page - 1) * limit;

    const queryBuilder = this.createQueryBuilder('notification')
      .where('notification.token = :token', { token });

    if (type) {
      queryBuilder.andWhere('notification.type = :type', { type });
    }

    return queryBuilder
      .orderBy('notification.createdAt', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();
  }
}