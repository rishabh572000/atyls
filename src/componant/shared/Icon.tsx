// Icon.tsx
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as GiIcons from 'react-icons/gi';

type IconLibrary = 'fa' | 'md' | 'ai' | 'hi' | 'gi';

interface IconProps {
  library: IconLibrary;
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ library, name, size = 24, color = 'black' }) => {
  const libraries = {
    fa: FaIcons,
    md: MdIcons,
    ai: AiIcons,
    hi: HiIcons,
    gi: GiIcons,
  };

  const IconComponent = (libraries[library] as { [key: string]: React.ComponentType<any> })[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found in ${library} library.`);
    return null;
  }

  return <div className='icons'>

    <IconComponent size={size} color={color} />
  </div>
  ;
};

export default Icon;
