import { cn, sanitizeDStorageUrl } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  src: string;
  children?: React.ReactNode;
  className?: string;
}

// Generate by stable_diffusion
export const NFTCard = (props: CardProps) => {
  const { src,className,...rest } = props;
  return (
    <div
      className={cn("w-[15.18125rem] h-[18.75rem] relative", className)}
      {...rest}
    >
      <Image src={src} alt="card" className="w-full h-full object-cover" />
      {props.children}
    </div>
  );
};