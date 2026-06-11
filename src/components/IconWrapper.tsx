import React from 'react';
import { IconBaseProps } from 'react-icons';

/**
 * Wrapper component to fix React 19 type issues with react-icons
 * Usage: <IconWrapper icon={FaMapMarkerAlt} className="mr-2" />
 */
interface IconWrapperProps extends IconBaseProps {
  icon: any; // Using any to bypass React 19 type strictness
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, ...props }) => {
  return <Icon {...props} />;
};

