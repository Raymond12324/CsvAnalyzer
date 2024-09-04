import fs from "fs";

export abstract class CsvFileReader<T> {
  _data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  Read(): void {
    this._data = fs
      .readFileSync(`Data/${this.fileName}`, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }

  get data(): T[] {
    return this._data;
  }
}
