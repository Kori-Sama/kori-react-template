import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-[3rem]">Hello, Koriさま!</h1>
      <div className="flex justify-center items-center gap-8">
        <Button onClick={() => setCount((pre) => pre + 1)}>
          {count === 0 ? "Click me!" : `${count} time${count === 1 ? "" : "s"}`}
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default HomePage;
