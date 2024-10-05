export interface Data {
  count: number;
}

export async function getData() {
  return new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({ count: 10 });
    }, 1000);
  });
}
