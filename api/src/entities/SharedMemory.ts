import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Memory } from "./Memory";

@Entity()
export class SharedMemory {
  @PrimaryGeneratedColumn()
  sharedId!: number;

  @ManyToOne(() => Memory, (memory) => memory.sharedMemories, {
    onDelete: "CASCADE",
  })
  memory!: Memory;

  @Column()
  recipient_email!: string;

  @CreateDateColumn()
  shared_at!: Date;
}
