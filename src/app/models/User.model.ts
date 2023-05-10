export class User {
  constructor(private id: number, public name: string, public isActive: boolean) {}

  get myId() {
    return this.id;
  }
}
