import { Counter } from "./counter";
import { getData } from "./dataApi";

export default async function Home() {
  const { count } = await getData();
  console.log("coucou from server", count);

  return (
    <>
      <div>Je suis créé par le server {count}</div>
      <Counter initialCount={count} />
    </>
  );
}
