import fs from "fs";
import { getPlaiceholder } from "plaiceholder";

const IMAGE_DIR_PATH = "./public/img";

async function getBase64(filePath: string): Promise<string> {
  const file = fs.readFileSync(filePath);
  const { base64 } = await getPlaiceholder(file);
  return base64;
}

async function processImages() {
  try {
    const files = fs.readdirSync(IMAGE_DIR_PATH);
    for (const file of files) {
      const filePath = `${IMAGE_DIR_PATH}/${file}`;
      const base64 = await getBase64(filePath);
      console.log(`Image: ${file}`);
      console.log(`Base64: ${base64}\n\n`);
    }
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

processImages();
