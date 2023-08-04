import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useEffect, useMemo, useRef, useState } from "react";
import daiba from "./assets/standingDaiba.gif";

export const App = () => {
  const [inputs, setInputs] = useState({ x: 100, y: 375 }); // Initialize as an object
  const keyPressed = useRef({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      keyPressed.current[e.code] = true;

      if (keyPressed.current["KeyD"]) {
        setInputs((prev) => ({ x: prev.x + 25, y: prev.y }));
      } else if (keyPressed.current["KeyA"]) {
        setInputs((prev) => ({ x: prev.x - 25, y: prev.y }));
      } else if (keyPressed.current["KeyW"]) {
        setInputs((prev) => ({ x: prev.x, y: prev.y - 15 })); // Subtract to move upwards
      }
    };

    const handleKeyUp = (e) => {
      keyPressed.current[e.code] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp); // Correct event name
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp); // Correct event name
    };
  }, []);

  return (
    <Stage>
      <Sprite
        image={daiba}
        x={inputs.x} // Use inputs.x for the x position
        y={inputs.y} // Use inputs.y for the y position
        scale={{ x: 0.3, y: 0.3 }}
        anchor={{ x: 0.5, y: 0.5 }}
      />
      <Sprite
        image={daiba}
        x={700}
        y={375}
        scale={{ x: 0.3, y: 0.3 }}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </Stage>
  );
};

export default App;
