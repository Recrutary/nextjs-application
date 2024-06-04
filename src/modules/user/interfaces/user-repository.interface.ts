import { UserResponseDto } from "../dtos";
import { IUserModel } from "../user";

export interface IUserRepository {
  findAll(): Promise<UserResponseDto[]>;
  findById(id: string): Promise<UserResponseDto | null>;
  create(user: IUserModel): Promise<UserResponseDto>;
  update(id: string, user: Partial<IUserModel>): Promise<UserResponseDto | null>;
  delete(id: string): Promise<void>;
}