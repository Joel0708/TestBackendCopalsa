import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('TareasController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/crear-tareas (POST) debería crear una tarea', async () => {
    const response = await request(app.getHttpServer())
      .post('/crear-tareas')
      .send({ titulo: 'Aprender Nest', descripcion: 'Repasar módulos' })
      .expect(201);

    expect(response.body).toHaveProperty('mensaje', 'Tarea registrada');
    expect(response.body).toHaveProperty('id');
  });

  it('/listar-tareas (GET) debería listar tareas', async () => {
    const response = await request(app.getHttpServer())
      .get('/listar-tareas')    // Cambie a Get el controller
      .expect(200);             

     expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
     expect(response.body[0]).toHaveProperty('titulo');
  }
});
});