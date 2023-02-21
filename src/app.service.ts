import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequestDto } from './dto/create-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION') private communicationClient: ClientProxy,
  ) {}
  private users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  createUser(createUserRequest: CreateUserRequestDto) {
    this.users.push(createUserRequest);
    this.communicationClient.emit('user_created', createUserRequest);
  }
}
