import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public repo: MessagesRepository) {}

  async findOne(id: string) {
    return this.repo.findOne(id);
  }

  async findAll() {
    return this.repo.findAll();
  }

  async create(content: string) {
    return this.repo.create(content);
  }
}
