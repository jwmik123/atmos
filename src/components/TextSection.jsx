import { Text } from "@react-three/drei";

export const TextSection = ({ title, subtitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY={"bottom"}
          fontSize={0.5}
          maxWidth={4}
          lineHeight={1}
          font="../fonts/IndieFlower-Regular.ttf"
        >
          {title}
        </Text>
      )}
      <Text
        color="white"
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.22}
        maxWidth={4}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
      >
        {subtitle}
      </Text>
    </group>
  );
};
