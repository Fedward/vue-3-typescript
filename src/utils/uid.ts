let id = 0;

export default function uid(): number {
  id += 1;

  return id;
}
