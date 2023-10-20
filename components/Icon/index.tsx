import { WifiIcon, XMarkIcon } from '@heroicons/react/24/solid'

interface IconProps {
  name: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const IconComponent = name === "close" ? XMarkIcon : WifiIcon;

  return <IconComponent className={`h-${size} w-${size}`} />;
};

export default Icon;
