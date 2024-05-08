import { IsNotEmpty, IsPhoneNumber, IsPositive, IsString } from 'class-validator'

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsPositive()
  price: number

  @IsPositive()
  quantity: number

  @IsPhoneNumber()
  phone: string
}
