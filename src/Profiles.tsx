import useSWR from "swr";

interface IUserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function UserInfo({ userInfo }: { userInfo: IUserInfo }) {
  return (
    <>
      <div>
        <h4>name: {userInfo.name}</h4>
        <p>username: {userInfo.username}</p>
        <p>email: {userInfo.email}</p>
      </div>
      <br />
    </>
  );
}

function Profiles() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  const userList: IUserInfo[] = data;

  return (
    <div>
      <br />
      {userList.map((userInfo, index) => (
        <UserInfo key={index} userInfo={userInfo} />
      ))}
    </div>
  );
}

export default Profiles;
