import { useEffect } from "react";

function App() {

  useEffect(() => {

    const main = "https://writeupportalos.netlify.app/";
    const backup = "https://htwth.vercel.app/";

    const check = async () => {
      try {

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);

        await fetch(main, { mode: "no-cors", signal: controller.signal });

        clearTimeout(timeout);

        window.location.href = main;

      } catch (err) {

        window.location.href = backup;

      }
    };

    check();

  }, []);

  return (
    <h2>Checking server...</h2>
  );
}

export default App;