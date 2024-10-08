import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(report: string): void {
    const html = `
        <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
        </div>
        `;
    console.log(html);

    fs.writeFileSync(`Reports/${this.reportName}.html`, html);
  }
}
