import { API } from "../constants";

//Fetch all guess from API "/guest"
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

//Fetch a single guest from API
export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
