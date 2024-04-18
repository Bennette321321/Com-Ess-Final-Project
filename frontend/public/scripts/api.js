import { BACKEND_URL } from "./config.js";

export async function getItems() {
  const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());

  return items;
}

export async function createItem(item) {
  await fetch(`${BACKEND_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

export async function deleteItem(id, item) {
  await fetch(`${BACKEND_URL}/items/${id}`, {
    method: "DELETE",
  });
}

export async function filterItems(filterName, lowerPrice, upperPrice) {
  // TODO3: implement this function
  console.log(filterName, lowerPrice, upperPrice);
  let filter = "";
  if (filterName === "ทั้งหมด") {
    filter = `?minPrice=${lowerPrice}&maxPrice=${upperPrice}`;
  } else {
    filter = `?name=${filterName}&minPrice=${lowerPrice}&maxPrice=${upperPrice}`;
  }
  const items = await fetch(`${BACKEND_URL}/items${filter}`).then((r) =>
    r.json()
  );
  return items;
  // You may need to understand handleFilterItem() function in ./table.js before implementing this function.
}

export async function getMembers() {
  const items = await fetch(`${BACKEND_URL}/members`).then((r) => r.json());

  return items;
}

export async function createMember(member) {
  await fetch(`${BACKEND_URL}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
}

export async function deleteMember(id, item) {
  await fetch(`${BACKEND_URL}/members/${id}`, {
    method: "DELETE",
  });
}