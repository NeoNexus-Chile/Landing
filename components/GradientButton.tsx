import { ReactNode } from "react";

type GradientButtonProps = {
  children: ReactNode;
  gradientOrientation: "left" | "right";
  onClick: () => void;
};

export default function GradientButton({
  children,
  gradientOrientation,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-[#8AB8E1] to-[#CF5F36] text-white py-4 px-8 rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
