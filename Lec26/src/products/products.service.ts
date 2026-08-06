import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics'
    },
    {
      id: 2,
      title: 'Gaming Mouse',
      description: 'High-precision gaming mouse with customizable buttons',
      price: 59.99,
      stock: 8,
      category: 'electronics'
    },
    {
      id: 3,
      title: 'Noise-Cancelling Headphones',
      description: 'Over-ear headphones with active noise cancellation',
      price: 199.99,
      stock: 5,
      category: 'electronics'
    },
    {
      id: 4,
      title: 'Smartwatch',
      description: 'Fitness-focused smartwatch with heart rate monitoring',
      price: 149.99,
      stock: 10,
      category: 'electronics'
    },
    {
      id: 5,
      title: 'Portable Bluetooth Speaker',
      description: 'Compact speaker with rich sound and long battery life',
      price: 79.99,
      stock: 15,
      category: 'electronics'
    }
  ]
  create(createProductDto: CreateProductDto) {
    const lastId = this.products[this.products.length - 1]?.id || 0
    const newObj = {
      id: lastId + 1,
      title: createProductDto.title,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock,
      category: createProductDto.category
    }
    this.products.push(newObj)
    return newObj
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(el => el.id === id)
    if (!product) throw new NotFoundException()
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new NotFoundException()
    this.products[index] = {
      ...this.products[index],
      title: updateProductDto.title ?? this.products[index].title,
      description: updateProductDto.description ?? this.products[index].description,
      price: updateProductDto.price ?? this.products[index].price,
      stock: updateProductDto.stock ?? this.products[index].stock,
      category: updateProductDto.category ?? this.products[index].category
    }
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new NotFoundException()
    const deletedProduct = this.products.splice(index, 1)
    return deletedProduct;
  }
}
