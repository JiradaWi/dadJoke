"use client"


import { useEffect, useState } from "react";

export default function Home() {
  const [dadJoke, setDadjoke] = useState("");

  useEffect(() => {
    newJoke();
  }, []);


  const newJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setDadjoke(data.joke);
        console.log(`Dad Joke: ${dadJoke}`);
      });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        Joke: {dadJoke}

        <div className="flex gap-4 items-center flex-col sm:flex-row" onClick={newJoke}>
         test
        
        </div>
      </main>
    
    </div>
  );
}
