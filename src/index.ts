import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("Data/football.csv");
const summary = Summary.winsAnalisisWithHtmlReport("Arsenal", "ArsenalWins");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
