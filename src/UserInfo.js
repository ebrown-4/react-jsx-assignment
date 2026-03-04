function UserInfo({ name, age, handleClick }) {
  return (
    <div>
      <h3>User Info</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default UserInfo;