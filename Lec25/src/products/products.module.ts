import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserAgent } from 'middlewares/userAgent.middleware';
import { RoleMiddleware } from 'middlewares/role.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserAgent)
      .forRoutes({ path: "products", method: RequestMethod.GET })

    consumer
      .apply(RoleMiddleware)
      .forRoutes(
        { path: 'products', method: RequestMethod.DELETE },
        { path: 'products', method: RequestMethod.POST },
        { path: 'products', method: RequestMethod.PUT },
      )
  }
}
