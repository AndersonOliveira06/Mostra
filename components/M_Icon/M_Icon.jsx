import { icons } from 'lucide-react-native';

const M_Icon = ({ name, color, size, fill }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} fill={fill ? fill : 'none'} />;
};

export default M_Icon;