"use client";

import { useState } from "react";

type Props = { initialCount: number };

async function updateData() {
  console.log("Update database");
}

export function Counter({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  console.log("coucou from client", initialCount);

  return (
    <div
      onClick={() => {
        setCount((c) => c + 1);
        updateData();
      }}
    >
      Je suis créé par le client {count}
    </div>
  );
}
