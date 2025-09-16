// model/model.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "tareas.json");

export function cargarTareas() {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data || "[]");
}

export function guardarTareas(tareas) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tareas, null, 2));
}
