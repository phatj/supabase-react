export function formToObject<T extends object>(form: HTMLFormElement): T {
  const fd = new FormData(form);
  return Object.fromEntries(fd) as T;
}
