import { useEffect, useState, FC } from "react";

type Props = {
  onComplete: () => void;
};

export const LoadingScreen: FC<Props> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Kuyumjyan />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="mb-5 font-mono text-3xl font-medium">
        {text}
        <span className="animate-blink ml-1 text-blue-400">|</span>
      </div>

      <div className="relative h-px w-[180px] overflow-hidden bg-zinc-800">
        <div className="animate-loading-bar h-full w-[40%] bg-blue-400" />
      </div>
    </div>
  );
};
