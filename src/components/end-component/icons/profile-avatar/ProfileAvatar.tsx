import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IMAGE_URL } from '@/lib/constants';
import React, { FC } from 'react';

type ProfileAvatarProps = {};

const ProfileAvatar: FC<ProfileAvatarProps> = ({}) => {
	// api

	// hooks

	// states

	// variables
	const light = IMAGE_URL.profileAvatar.light;
	const dark = IMAGE_URL.profileAvatar.dark;

	// styles

	// functions

	// effects

	// components

	return (
		<Avatar className='cursor-pointer'>
			<AvatarImage src={light} alt={light} className='dark:scale-0' />
			<AvatarImage src={dark} alt={dark} className='absolute scale-0 dark:scale-100' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
};

export default ProfileAvatar;
