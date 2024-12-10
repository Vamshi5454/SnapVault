import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";
import { SharedMemory } from "./SharedMemory";

@Entity()
export class Memory {
  @PrimaryGeneratedColumn()
  memoryId!: number;

  @ManyToOne(() => User, (user) => user.memories, { onDelete: "CASCADE" })
  user!: User;

  @Column({ length: 255 })
  title!: string;

  @Column()
  file_url!: string;

  @Column({ type: "date" })
  upload_date!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Tag, (tag) => tag.memory)
  tags!: Tag[];

  @OneToMany(() => SharedMemory, (sharedMemory) => sharedMemory.memory)
  sharedMemories!: SharedMemory[];
}
