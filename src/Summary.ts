import { MatchData } from "./MatchData";
import { WinAnalisis } from "./Analyzer/WinsAnalisis";
import { HtmlReport } from "./ReportTargets/HtmlReport";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalisisWithHtmlReport(team: string, filename: string) {
    return new Summary(new WinAnalisis(team), new HtmlReport(filename));
  }

  static winsAnalisisWithConsoleReport(team: string) {
    return new Summary(new WinAnalisis(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
