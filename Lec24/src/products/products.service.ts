import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IProducts } from './DTO/products.dto';
import { IHeader } from './DTO/headers.dto';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and up to 30 hours of battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness, monitor your heart rate, and receive notifications on the go.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable speaker with rich sound, deep bass, and water-resistant design.",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      description: "Durable backpack with a padded laptop compartment and multiple storage pockets.",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with responsive switches for gaming and productivity.",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      description: "Ergonomic gaming mouse with adjustable DPI and customizable buttons.",
    },
    {
      id: 7,
      name: "USB-C Hub",
      description: "Expand your laptop's connectivity with HDMI, USB, SD card, and Ethernet ports.",
    },
    {
      id: 8,
      name: "External SSD",
      description: "Fast and reliable portable SSD with 1TB of storage and USB-C support.",
    },
  ];

  getAll(query) {

    let { id, name, description, page=1, take=3 } = query

    let data = this.products

    if (id) data = data.filter((el) => el.id === Number(id))

    if (name) data = data.filter((el) => el.name === name)

    if (description) data = data.filter((el) => el.description === description)

    take > 3 ? take = 3 : take

    return data.slice((page - 1) * take, page*take)
  }

  getById(id: number) {
    const product = this.products.find(el => el.id === Number(id))
    if (!product) throw new BadRequestException()
    return product
  }

  create(body: IProducts) {
    const lastId = this.products[this.products.length - 1]?.id || 0
    const newObj = {
      id: lastId + 1,
      name: body.name,
      description: body.description
    }

    this.products.push(newObj)

    return newObj
  }

  update(id: number, body: IProducts) {
    const index = this.products.findIndex(el => el.id === Number(id))

    if (index === -1) throw new NotFoundException()

    this.products[index] = {
      ...this.products[index],
      name: body.name ?? this.products[index].name,
      description: body.description ?? this.products[index].description
    }

    return this.products[index]
  }

  delete(id: number, headers: IHeader) {
    if (!headers || headers.password !== "secret") throw new BadRequestException()

    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new NotFoundException()
    let deletedProduct = this.products.splice(index, 1)

    return deletedProduct
  }
}
