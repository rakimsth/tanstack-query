import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
function AddPost() {
  const [post, setPost] = useState({
    title: "",
  });

  function handleChange(event: any) {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const newPostMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: post.title,
          body: post.title,
          userId: 1,
        }
      );
      const data = response.data;
      return data;
    },
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    newPostMutation.mutate();
  };

  return (
    <div style={{ border: "1px green solid" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          onChange={handleChange}
          value={post.title}
        />
        <button>Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
