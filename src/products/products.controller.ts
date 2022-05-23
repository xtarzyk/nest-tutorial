import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { EditProductDto } from './dtos/edit-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsContoller {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getAll()
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getById(+id)
  }

  @Post()
  addProduct(@Body() body: CreateProductDto) {
    return this.productsService.add(body.title, body.price)
  }

  @Delete('/:id')
  @HttpCode(204)
  removeProduct(@Param('id') id: string) {
    this.productsService.remove(+id)
  }

  @Patch('/:id')
  editProduct(@Body() body: EditProductDto, @Param('id') id: string) {
    return this.productsService.edit(+id, body.price)
  }
}
