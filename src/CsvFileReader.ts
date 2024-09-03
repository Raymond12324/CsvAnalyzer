import fs from "fs";
import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  _data: MatchData[] = [];
  constructor(public fileName: string) {}
  Read(): void {
    this._data = fs
      .readFileSync(`Data/${this.fileName}`, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): MatchData => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }

  get data(): MatchData[] {
    return this._data;
  }
}
