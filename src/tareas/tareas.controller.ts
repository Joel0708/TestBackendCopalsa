import { Body, Controller, Post, BadRequestException, Get } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CrearTareaDto } from './dto/crear.tarea.dto';

@Controller()
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post('crear-tareas')
  async crear(@Body() body: CrearTareaDto) {
    if (!body.titulo?.trim()) {
      throw new BadRequestException('El título es obligatorio');
    }
    const tarea = await this.tareasService.crear(body);
    return {
      mensaje: 'Tarea registrada',
      id: tarea.id,
    };
  }

  @Get('listar-tareas')
  listar() {
    return this.tareasService.listar();
  }
}