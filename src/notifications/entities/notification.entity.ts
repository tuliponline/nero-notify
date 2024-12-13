import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  stickerPackageId: string;

  @Column({ nullable: true })
  stickerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}