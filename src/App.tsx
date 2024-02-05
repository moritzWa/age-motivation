import { useEffect, useState } from "react";

function App() {
  const birthdate = new Date("1998-12-13");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge((Date.now() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365);
    }, 10);
    return () => clearInterval(interval);
  }, [birthdate]);

  return (
    <div className="flex h-screen m-auto mt-32 font-medium max-w-7xl">
      <div className="flex flex-col w-1/2">
        <div className="text-6xl">{age.toFixed(9)}</div>
        <div className="flex-1 h-full">calendar</div>
      </div>
      <div className="w-1/2">quotes</div>
    </div>
  );
}

export default App;
