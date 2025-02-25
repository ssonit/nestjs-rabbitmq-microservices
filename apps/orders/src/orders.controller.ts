import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderRequest } from './dto/create-order.request'
import { JwtAuthGuard } from '@app/common'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(@Body() request: CreateOrderRequest, @Req() req: any) {
    console.log(req.user)
    return this.ordersService.createOrder(request, req.cookies?.Authentication)
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders()
  }
}
