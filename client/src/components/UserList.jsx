import React, { useEffect, useState } from 'react';
import { Avatar, usChatChannel } from 'stream-chat-react';

import { InviteIcon } from '../assets';

const ListContainer = ({ children }) => {
	return (
		<div className="user-list__container">
			<div className="user-list__header">
				<p>User</p>
				<p>Invite</p>
			</div>
			{children}
		</div>
	);
};

const UserList = () => {
	return <ListContainer>UserList</ListContainer>;
};

export default UserList;
