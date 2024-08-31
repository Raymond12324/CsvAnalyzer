import fs from "fs";

export class CsvFileReader {
  _data: string[][] = [];
  constructor(public fileName: string) {}

  Read(): void {
    this._data = fs
      .readFileSync(`Data/${this.fileName}`, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }

  get data(): string[][] {
    return this._data;
  }
}
