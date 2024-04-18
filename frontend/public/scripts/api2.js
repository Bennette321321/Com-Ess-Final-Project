import { BACKEND_URL } from "./config2.js";

export async function getItems() {
    const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());
  
    return items;
}