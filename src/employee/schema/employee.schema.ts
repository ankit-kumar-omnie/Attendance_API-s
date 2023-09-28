import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";
import { AddressSchema } from "./adress.schema";


export type EmployeeDocument = Employee & Document

@Schema({ timestamps: true })
export class Employee {

    @Prop({ required: true })
    firstname: string;

    @Prop()
    lastname: string;

    @Prop({ type: Date })
    birth_day: Date;

    @Prop({ required: true, unique: true, })
    mobile_number: string;

    @Prop({ type: AddressSchema })
    address;

    @Prop()
    father_name: string;

    @Prop()
    mother_name: string;

    @Prop()
    alternate_number: number;

    @Prop({ type: Date, required: true })
    joining_date: Date;

    @Prop({ required: true, unique: true, })
    employee_id: string;

    @Prop({ required: true, unique: true, })
    official_email: string;

    @Prop()
    personal_email: string;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);