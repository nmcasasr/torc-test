import { get } from "./xhr/index";
let APIUrl = "https://localhost:7004/books";

export function getBooks(category: string, searchInputValue: string) {
  const url = APIUrl + `/${category}`;
  const params = {
    searchValue : searchInputValue,
  };
  return get(url, params);
}
