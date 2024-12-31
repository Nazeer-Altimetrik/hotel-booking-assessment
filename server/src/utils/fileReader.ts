import fs from "fs";
import path from "path";

export const readJSONFile = (fileName: string): any => {
  try {
    const filePath = path.join(__dirname, "../sampleData", fileName);
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error reading or parsing file ${fileName}`, err.message);
      throw new Error("Error reading or parsing JSON file");
    } else {
      console.error("Unexpected error", err);
      throw new Error("Unexpected error occurred");
    }
  }
};

export const writeJSONFile = (fileName: string, data: any): void => {
  try {
    const filePath = path.join(__dirname, "../sampleData", fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error writing to file ${fileName}`, err.message);
      throw new Error("Error writing JSON file");
    } else {
      console.error("Unexpected error", err);
      throw new Error("Unexpected error occurred");
    }
  }
};
