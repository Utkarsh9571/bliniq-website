import fs from "fs";
import path from "path";

export function getCsvData(filename: string): Record<string, string>[] {
  const filePath = path.join(/*turbopackIgnore: true*/ process.cwd(), filename);
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, "utf-8");

  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows[0].map((h: string) => h.replace(/^\uFEFF/, "").trim().replace(/"/g, ""));
  const data: Record<string, string>[] = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (r.length < headers.length) continue;
    const item: Record<string, string> = {};
    headers.forEach((h: string, idx: number) => {
      item[h] = r[idx];
    });
    data.push(item);
  }
  return data;
}

export interface PageContent {
  ID: string;
  post_title: string;
  post_name: string;
  post_content: string;
}

export function getPageContentBySlug(slug: string): PageContent | undefined {
  const pages = getCsvData("data-page-content.csv") as unknown as PageContent[];
  return pages.find((p) => p.post_name === slug);
}

export function getAllPageContents(): PageContent[] {
  return getCsvData("data-page-content.csv") as unknown as PageContent[];
}

