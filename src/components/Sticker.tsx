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
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      whileDrag={{ scale: 1.02 }}
      whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
      dragConstraints={dragConstraints}
      className={cn("absolute z-30", className)}
      {...restProps}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="select-none"
        draggable={false}
      />
    </motion.div>
  );
};

export default Sticker;
