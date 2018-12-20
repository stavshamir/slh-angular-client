export class Filter {
  constructor(
    public type: string,
    public minValue: number,
    public maxValue: number,
    public isActive: boolean,
    public from: number,
    public to: number,
  ) {}
}
