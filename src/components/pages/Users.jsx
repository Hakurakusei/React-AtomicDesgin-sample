import styled from "styled-components";
import { SerchInput } from "../molecures/SerchInput";
import { UserCards } from "../organisms/user/UserCards";
import { HeaderOnly } from "../templates/HeaderOnly";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `俺${val}`,
    image: "https://source.unsplash.com/45ixjp1iDhk",
    email: "12345@example.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト株式"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SerchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCards user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
