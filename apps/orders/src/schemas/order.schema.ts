import { AbstractDocument } from '@app/common'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
  versionKey: false
})
export class Order extends AbstractDocument {
  @Prop()
  name: string

  @Prop()
  price: number

  @Prop()
  quantity: number

  @Prop()
  phone: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)
