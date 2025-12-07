import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private name: string = "Armin"

  setName(newName: string): void {
    this.name = newName
  }
  getName(): string {
    return this.name
  }
}
