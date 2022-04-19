import React, { useState, useEffect } from "react";
import moment from "moment";
import { Avatar, Card } from "antd";
import { useRouter } from "next/router";
import { useUser } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Meta } = Card;

const Username = () => {
  const { state, setState } = useUser();
  const router = useRouter();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (router.query.username) fetchUser();
  }, [router.query.username]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/user/${router.query.username}`);
      setUser(data);
    } catch (err) {
      router.push("/");
    }
  };

  const imageSource = (user) => {
    if (user && user.image) {
      return user.image.url;
    } else {
      return "/images/defaultuser.png";
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="py-5">
        <Card
          style={{ width: 300, margin: "auto" }}
          hoverable
          cover={<img src={imageSource(user)} alt={user.name} />}
        >
          <Meta title={user.name} description={user.about} />
          <p className="py-4 text-muted">
            Joined {moment(user.createdAt).fromNow()}
          </p>

          <div className="d-flex justify-content-between">
            <span className="btn btn-sm">
              {user.followers && user.followers.length} Followers
            </span>
            <span className="btn btn-sm">
              {user.following && user.following.length} Following
            </span>
          </div>
        </Card>
        <Link href="/user/dashboard">
          <a className="d-flex justify-content-center py-5">
            <RollbackOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Username;
