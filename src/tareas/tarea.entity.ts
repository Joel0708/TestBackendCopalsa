import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: string;
}