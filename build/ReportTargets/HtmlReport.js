"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    constructor(reportName) {
        this.reportName = reportName;
    }
    print(report) {
        const html = `
        <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
        </div>
        `;
        console.log(html);
        fs_1.default.writeFileSync(`Reports/${this.reportName}.html`, html);
    }
}
exports.HtmlReport = HtmlReport;
