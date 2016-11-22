import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
	const userItems = props.users.map((user) => {
		return (<UserItem key={user.id} user={user} />);
	});

	return (
		<ul>{userItems}</ul>
	);
};

export default UserList;
