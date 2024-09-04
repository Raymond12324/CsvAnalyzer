"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReport_1 = require("./ReportTargets/ConsoleReport");
const WinsAnalisis_1 = require("./Analyzer/WinsAnalisis");
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("Data/football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalisis_1.WinAnalisis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
