import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './tarea.entity';
import { CrearTareaDto } from './dto/crear.tarea.dto';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tarea)
    private readonly repo: Repository<Tarea>,
  ) {}

  async crear(data: CrearTareaDto) {
    const tarea = this.repo.create(data);
    return await this.repo.save(tarea);
  }

  listar() {
    return this.repo.find();
  }
}