import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()

export class Address {

    @Prop()
    line1: string;

    @Prop()
    line2: string;

    @Prop()
    city: string;

    @Prop()
    zip: number;

    @Prop()
    state: string;

    @Prop()
    country: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);