import { Exclude, Expose } from 'class-transformer'
import { IsString } from 'class-validator'

export class LoginBodyDTO {
  @IsString()
  email: string

  @IsString()
  password: string
}

export class RegisterBodyDTO extends LoginBodyDTO {
  @IsString({ message: 'Name must be a string' })
  name: string

  @IsString()
  confirmPassword: string
}

export class RegisterResponseDTO {
  id: number
  email: string
  name: string

  @Exclude()
  password: string

  createdAt: Date
  updatedAt: Date

  // @Expose()
  // get emailName() {
  //   return `${this.name} - ${this.email}>`
  // }

  constructor(partial: Partial<RegisterResponseDTO>) {
    Object.assign(this, partial)
  }
}
