import fs from "fs";
import { stringToDate } from "./utils";

export class CsvFileReader {
  _data: string[][] = [];
  constructor(public fileName: string) { }

  Read(): void {
    this._data = fs
      .readFileSync(`Data/${this.fileName}`, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
        ]
      })
  }

  get data(): string[][] {
    return this._data;
  }
}
