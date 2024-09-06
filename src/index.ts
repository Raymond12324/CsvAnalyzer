import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = MatchReader.fromCsv("Data/football.csv");
const summary = Summary.winsAnalisisWithHtmlReport("Arsenal", "ArsenalWins");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
