import { IUserRepository, UserResponseDto } from "@/modules";
import User, { IUserModel } from "@/modules/user/user";


class UserRepository implements IUserRepository {
  async findAll(): Promise<UserResponseDto[]> {
    const aUsers = await User.find({});
    return aUsers.map(this.mapUserResponse);
  }

  async findById(id: string): Promise<UserResponseDto | null> {
    const user = await User.findById(id);
    return user ? this.mapUserResponse(user) : null;
  }

  async create(user: IUserModel): Promise<UserResponseDto> {
    const newUser = new User(user);
    const oUser = await newUser.save();
    return this.mapUserResponse(oUser);
  }

  async update(id: string, user: Partial<IUserModel>): Promise<UserResponseDto | null> {
    const oUser = await User.findByIdAndUpdate(id, user, { new: true });
    return oUser ? this.mapUserResponse(oUser) : null;
  }

  async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  }

  private mapUserResponse(user: IUserModel): UserResponseDto {
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}

export default new UserRepository();
