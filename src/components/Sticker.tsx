import { cn } from "@/utils/cn";
import { motion, type MotionProps } from "framer-motion";
import Image from "next/image";

type stickerProps = {
  src: string;
  className: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  alt: string;
} & MotionProps;

const Sticker = ({
  drag,
  src,
  width,
  height,
  className,
  dragConstraints,
  alt,
  ...restProps
}: stickerProps) => {
  return (
    <motion.div
      drag={drag}
      dragConstraints={dragConstraints}
      className={cn("absolute z-30", className)}
      {...restProps}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </motion.div>
  );
};

export default Sticker;
