import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Memory } from "./Memory";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tagId!: number;

  @Column({ length: 50 })
  tagName!: string;

  @ManyToOne(() => Memory, (memory) => memory.tags, { onDelete: "CASCADE" })
  memory!: Memory;
}
