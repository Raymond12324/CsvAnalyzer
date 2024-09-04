import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { WinAnalisis } from "./Analyzer/WinsAnalisis";
import { Summary } from "./Summary";
import { HtmlReport } from "./ReportTargets/HtmlReport";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("Data/football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinAnalisis("Newcastle"),
  new HtmlReport("winsMU")
);

summary.buildAndPrintReport(matchReader.matches);
