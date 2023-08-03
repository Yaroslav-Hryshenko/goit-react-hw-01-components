export const Profile = ({ user }) => {
    return (
      <>
        {user.map(user => (
          <li key={user.id}>
            {' '}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          </li>
        ))}
      </>
    );
};