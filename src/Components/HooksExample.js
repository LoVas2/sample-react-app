import { useEffect, useLayoutEffect, useState } from "react";

const useConstructor = (callBack) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
}

const HooksExample = () => {
  const [counter, setCounter] = useState(0);
  const [constructorHasRun, setConstructorHasRun] = useState(false);


  // 1rst
  // Occurs EVERY time the component is invoked.
  // AKA the component is shown or the useState is invoked
  console.log("Occurs EVERY time the component is invoked.");

  // 3rd
  // Occurs ONCE, but it still occurs AFTER the initial render.
  // Effects always fire after rendering.
  useLayoutEffect(() => {
    console.log(
      "Occurs ONCE, but it still occurs AFTER the initial render."
    );
  }, []);

  // 4th
  // Occurs ONCE, AFTER the initial render.
  useEffect(() => {
    console.log(
      "Occurs ONCE, AFTER the initial render."
    );
  }, []);

  // 2scd Constructor custom inside the component
  const constructor = () => {
    if (constructorHasRun) return;
    console.log("Inline constructor()");
    setConstructorHasRun(true);
  };
  constructor();


  // 2scd Constructor with custom hooks
  // Can be reuse in other components
  useConstructor(() => {
    console.log(
      "HooksConstructor. Occurs ONCE, BEFORE the initial render."
    );
  });

  return (
    <>
      <div>Counter: {counter}</div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </>
  );
};

export default HooksExample;