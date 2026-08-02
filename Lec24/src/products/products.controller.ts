import { Controller, Get, Post, Body, Param, Query, ParseIntPipe, Headers, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() query) {
    return this.productsService.getAll(query);
  }

  @Get("/:id")
  getById(@Param("id", ParseIntPipe) id) {
    return this.productsService.getById(id)
  }

  @Post()
  createProduct(@Body() body) {
    return this.productsService.create(body)
  }

  @Put()
  updateProduct(@Body() body, @Param("id", ParseIntPipe) id){
    return this.productsService.update(id, body)
  }

  @Delete("/:id")
  deleteProduct(@Param("id", ParseIntPipe) id, @Headers() Headers) {
    return this.productsService.delete(id, Headers)
  }
}
