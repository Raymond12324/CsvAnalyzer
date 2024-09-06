"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalisis_1 = require("./Analyzer/WinsAnalisis");
const HtmlReport_1 = require("./ReportTargets/HtmlReport");
const ConsoleReport_1 = require("./ReportTargets/ConsoleReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalisisWithHtmlReport(team, filename) {
        return new Summary(new WinsAnalisis_1.WinAnalisis(team), new HtmlReport_1.HtmlReport(filename));
    }
    static winsAnalisisWithConsoleReport(team) {
        return new Summary(new WinsAnalisis_1.WinAnalisis(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
