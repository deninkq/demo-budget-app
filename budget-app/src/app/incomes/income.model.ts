export class Income {
  public description: string;
  public value: number;
  public date: Date = new Date();

  constructor(desc: string, value: number, date: Date = new Date()) {
    this.description = desc;
    this.value = value;
    this.date = date;
  }
}
