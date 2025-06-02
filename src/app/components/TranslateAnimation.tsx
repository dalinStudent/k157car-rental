import { TypeAnimation } from "react-type-animation";

interface TranslateAnimationProps {
  sequence: (string | number)[];
}
export const TranslateAnimation = ({ sequence }: TranslateAnimationProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      cursor={false}
      speed={10}
      wrapper="span"
      repeat={Infinity}
      className="canadia-gradient-text"
    />
  );
};
