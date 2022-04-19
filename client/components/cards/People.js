import React from "react";
import moment from "moment";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { useUser } from "../../context";
import { imageSource } from "../../Functions";
import Link from "next/link";
const People = ({ people, handleFollow, handleUnfollow }) => {
  const { state } = useUser();
  const router = useRouter();

  return (
    <>
      {/* <pre> {JSON.stringify(people, null, 4)} </pre> */}
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <>
            {state && state.user && user._id == state.user._id ? (
              ""
            ) : (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={imageSource(user)} />}
                  title={
                    <div className="d-flex justify-content-between">
                      <Link href={`/user/${user.username}`}>
                        <a>{user.username}</a>
                      </Link>
                      {state &&
                      state.user &&
                      user.followers &&
                      user.followers.includes(state.user._id) ? (
                        <span
                          onClick={() => handleUnfollow(user)}
                          className="text-primary pointer"
                        >
                          Unfollow
                        </span>
                      ) : (
                        <span
                          onClick={() => handleFollow(user)}
                          className="text-primary pointer"
                        >
                          Follow
                        </span>
                      )}
                    </div>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          </>
        )}
      />
    </>
  );
};

export default People;
