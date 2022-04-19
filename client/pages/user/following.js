import React, { useState, useEffect } from "react";
import moment from "moment";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { useUser } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";
import { toast } from "react-toastify";

const following = () => {
  const { state, setState } = useUser();
  const router = useRouter();

  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {
      const { data } = await axios.get("/user-following");

      setPeople(data.following);
    } catch (err) {
      toast.error(err.response.data.message);
      router.push("/");
    }
  };

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "/images/defaultuser.png";
    }
  };

  const handleUnFollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      setPeople(people.filter((p) => p._id !== user._id));
      toast.success(`Unfollowed ${user.name}`);
    } catch (err) {
      toast.error("Couldn't unfollow! please try again");
    }
  };
  return (
    <div className="row col-md-6 offset-md-3 col-12 p-4">
      {/* <pre> {JSON.stringify(people, null, 4)} </pre> */}
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between align-items-center">
                  {user.username}
                  <span
                    onClick={() => handleUnFollow(user)}
                    className="text-primary pointer"
                  >
                    Unfollow
                  </span>
                </div>
              }
            ></List.Item.Meta>
          </List.Item>
        )}
      />
      <Link href="/user/dashboard">
        <a className="d-flex justify-content-center py-5">
          <RollbackOutlined />
        </a>
      </Link>
    </div>
  );
};

export default following;
