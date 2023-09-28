import { Type } from "class-transformer";
import { MaxDate, IsAlphanumeric, IsEmail, Length, } from "class-validator";
import { Date } from "mongoose";


const date = new Date().getTime() - 86400000;
const yesdate = new Date(date)


export class UpdateEmployeeDto {
    @Length(1, 50)
    firstname: string;

    @Length(1, 50)
    lastname: string;


    birth_day: Date;
    mobile_number: string;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        zip: number;
        country: string;
    };

    @Length(1, 50)
    father_name: string;

    @Length(1, 50)
    mother_name: string;
    alternate_number: number;

    @MaxDate(yesdate)
    @Type(() => Date)
    joining_date: Date;

    @IsAlphanumeric()
    employee_id: string;

    @IsEmail()
    official_email: string;
    personal_email: string;
}

