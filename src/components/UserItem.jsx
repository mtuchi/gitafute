import React from 'react';

const UserItem = (props) => {
	return (
		<div className="user-item">
			<img src={props.user.avatar_url} alt={props.user.login} />
			<div>
				{props.user.name} <br />
				{props.user.email}
			</div>
		</div>
	);
};

export default UserItem;
