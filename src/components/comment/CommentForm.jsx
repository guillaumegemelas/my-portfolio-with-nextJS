import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { useState } from "react";
import { commentsUrl } from "../../lib/api-url";

export const CommentForm = ({ updateComment }) => {
  // Commentaire - Exercise
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    // console.log({ username });
    const comment = formData.get("comment");
    // console.log({ comment });

    if (username.length < 4 || username.length > 20) {
      setError("Username must be between 4 and 20 characters");
      return;
    }
    if (comment.length < 10 || comment.length > 50) {
      setError("Comment must be between 10 and 50 characters");
      return;
    }

    fetch(commentsUrl, {
      method: "POST",
      body: JSON.stringify({ username, comment }),
    })
      .then(async (res) => {
        const json = await res.json();

        if (res.ok) {
          event.target.reset();
          updateComment();
          setError("");
        } else {
          setError(json.error);
        }
      })
      .catch((e) => {
        setError("Something wrong" + String(e));
      });
  };

  return (
    <form
      className="flex w-full flex-col gap-4 md:px-8"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Username"
        // id="comment"
        //l'id est inutile si il y a le name dans les paramètres
        name="username"
        type="text"
        placeholder="Username"
      />

      <TextField
        label="Comment"
        // id="username"
        name="comment"
        type="text"
        placeholder="Comment"
        component="textarea"
      />
      {error ? <p style={{ color: "#eb4d4b" }}>{error}</p> : null}

      <Button type="submit">Submit</Button>
    </form>
  );
};
