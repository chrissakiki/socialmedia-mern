import React, { useState } from "react";
import { useUser } from "../context";
import axios from "axios";
import People from "../components/cards/People";
import { toast } from "react-toastify";

const Search = () => {
  const { state, setState } = useUser();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [visible, setVisible] = useState(false);

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      setResult(data);
      setVisible(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleFollow = async (user) => {
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      setResult(result.filter((p) => p._id !== user._id));
      toast.success(`Following ${user.name}`);
      setVisible(false);
      setQuery("");
      setResult([]);
    } catch (err) {
      toast.error("Couldn't follow this user, please try again");
    }
  };

  const handleUnfollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      setResult(result.filter((p) => p._id !== user._id));
      toast.success(`Unfollowed ${user.name}`);
      setVisible(false);
      setQuery("");
      setResult([]);
    } catch (err) {
      toast.error("Couldn't unfollow user, please try again");
    }
  };

  return (
    <>
      <form className="form-inline row pt-4 py-md-0" onSubmit={searchUser}>
        <div className="col-8">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
              setVisible(false);
            }}
            value={query}
            className="form-control"
            type="search"
            placeholder="Search"
          />
        </div>

        <div className="col-4">
          <button className="btn btn-outline-primary col-12" type="submit">
            Search
          </button>
        </div>
      </form>
      {!visible ? (
        ""
      ) : (
        <People
          people={result}
          handleFollow={handleFollow}
          handleUnfollow={handleUnfollow}
        />
      )}
    </>
  );
};

export default Search;
