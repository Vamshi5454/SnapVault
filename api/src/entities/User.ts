import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Memory } from "./Memory";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 100 })
  password!: string;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Memory, (memory) => memory.user)
  memories!: Memory[];
}
