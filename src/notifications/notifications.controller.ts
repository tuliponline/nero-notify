import { Controller, Post, Get, Body, Headers, UnauthorizedException, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { NotifyDto } from './dto/notify.dto';
import { GetNotificationsDto } from './dto/get-notifications.dto';
import { PaginatedNotificationsResponseDto } from './dto/notification-response.dto';

@ApiTags('notifications')
@Controller('notifications')
@ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('notify')
  @ApiOperation({ summary: 'Send a notification' })
  @ApiResponse({ status: 200, description: 'Notification sent successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async notify(
    @Headers('authorization') auth: string,
    @Body() notifyDto: NotifyDto,
  ) {
    if (!auth) {
      throw new UnauthorizedException('Access token is required');
    }

    const token = auth.replace('Bearer ', '');
    return this.notificationsService.sendNotification(token, notifyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get notifications for the authenticated user' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns paginated notifications',
    type: PaginatedNotificationsResponseDto
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getNotifications(
    @Headers('authorization') auth: string,
    @Query() query: GetNotificationsDto,
  ): Promise<PaginatedNotificationsResponseDto> {
    if (!auth) {
      throw new UnauthorizedException('Access token is required');
    }

    const token = auth.replace('Bearer ', '');
    return this.notificationsService.getNotifications(token, query.page, query.limit);
  }
}