import { icons } from 'lucide-react-native';

const M_Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default M_Icon;