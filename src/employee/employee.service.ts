import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Date, Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee.schema';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

interface User {
  firstname: string,
  lastname: string,
  mobile_number: string,
  birth_day: Date,
  address:{
  line1: string,
  line2: string,
  city: string,
  state: string,
  zip: number,
  country: string
  },
  father_name: string,
  mother_name: string,
  alternate_number: number,
  joining_date: Date,
  official_email: string,
  employee_id: string,
  personal_email: string

}


@Injectable()
export class EmployeeService {

  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>
  ) { }

  async create(user: User) {
    const newUser = new this.employeeModel({
      firstname: user.firstname,
      lastname: user.lastname,
      birth_day: user.birth_day,
      mobile_number: user.mobile_number,
      address: {
        line1: user.address.line1,
        line2: user.address.line2,
        city: user.address.city,
        state: user.address.state,
        zip: user.address.zip,
        country: user.address.country,
      },
      father_name: user.father_name,
      mother_name: user.mother_name,
      alternate_number: user.alternate_number,
      employee_id: user.employee_id,
      joining_date: user.joining_date,
      official_email: user.official_email,
      personal_email: user.personal_email,

    })
    try {
      await newUser.save()
    }
    catch (error) {
      if (error.message.includes('firstname')) {
        throw new HttpException('User already exists', 400)
      }
      else if (error.message.includes('mobile_number')) {
        throw new HttpException('Mobile number already exists', 400)
      }
      else if (error.message.includes('official')) {
        throw new HttpException('Official-email already exists', 400)
      }
      else if (error.message.includes('employee_id')) {
        throw new HttpException('employee-ID already exists', 400)
      }

    }
  }

  readAll() {
    return this.employeeModel.find({}).exec();
  }


  findById(id: string) {
    return this.employeeModel.findById(id);
  }


  update(id: string, data: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate(id, data, { new: true })
  }


  remove(id: string) {
    return this.employeeModel.findByIdAndDelete(id);
  }



}






// import { Injectable } from "@nestjs/common"; 
// import { Model } from "mongoose";
// import { InjectModel } from "@nestjs/mongoose";
// import { Employee, EmployeeDocument } from "./schema/employee.schema";
// import { CreateEmployeeDto } from "./dto/create-employee.dto";



// @Injectable({})
// export class EmployeeService {

//   constructor(@InjectModel(Employee.name)
//   private readonly employeeModel: Model<EmployeeDocument>) { }

//   // function to create a new entry in DB

//   create(employee: CreateEmployeeDto): Promise<Employee> {
//     const newCourse = new this.employeeModel(employee)
//     return newCourse.save()
//   }
// }
