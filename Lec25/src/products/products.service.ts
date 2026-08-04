import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
  ]
  create(createProductDto: CreateProductDto) {
    const newId = this.products[this.products.length - 1]?.id || 0
    const newObj = {
      id: newId + 1,
      name: createProductDto.name,
      price: createProductDto.price
    }

    this.products.push(newObj)

    return newObj;
  }

  findAll(query) {
    const { id, name, price } = query

    let data = this.products

    if (id) data = data.filter((el) => el.id === Number(id))

    if (name) data = data.filter((el) => el.name === name)

    if (price) data = data.filter((el) => el.price === Number(price))

    return data;
  }

  findOne(id: number) {
    const product = this.products.find(el => el.id === id);
    if(!product) throw new BadRequestException()
    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new BadRequestException()
    this.products[index] = {
      ...this.products[index],
      name: updateProductDto.name ?? this.products[index].name,
      price: updateProductDto.price ?? this.products[index].price
    }
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new BadRequestException()
    const deletedProduct = this.products.splice(index, 1)

    return deletedProduct
  }
}
