import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../controllers/product.controller';
import { ProductCommandHandler } from '../../commandHandler/product/product.command.handler';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductCommandHandler],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<ProductController>(ProductController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
