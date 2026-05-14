import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

const DEFAULT_LANG = 'en';

export async function getCurrentLang() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || DEFAULT_LANG;
  return lang;
}

export async function getDictionary() {
  const lang = await getCurrentLang();
  try {
    const filePath = path.join(process.cwd(), `${lang}.lang`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading dictionary for language: ${lang}`, error);
    // Fallback to english if not found
    try {
      const fallbackPath = path.join(process.cwd(), `en.lang`);
      const fallbackContents = fs.readFileSync(fallbackPath, 'utf8');
      return JSON.parse(fallbackContents);
    } catch (e) {
      return {};
    }
  }
}
