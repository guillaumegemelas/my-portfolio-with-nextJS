import { commentsUrl } from "../../lib/api-url";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../atom/Loader/Loader";
import { Typography } from "../atom/Typography";

import { FaTools } from "react-icons/fa";

export const CommentSection = () => {
  // Commentaires - Exercise
  const {
    data: comments,
    error,
    isLoading,
    isRejected,
    isResolved,
    isIdle,
    run,
  } = useFetch(commentsUrl);

  // console.log(comments); //renvoie bien les commentaires---

  //pour l'exemple:
  // const comments = [
  //   {
  //     username: "John Doe",
  //     comment: "Hello World",
  //     createdAt: new Date(1000),
  //   },
  // ];

  return (
    <SectionWrapper
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaTools
            style={{
              fontSize: "28px",
              color: "#677AF1",
              marginRight: "15px",
            }}
            id="Comments"
          />{" "}
          {/* Leave a comment ! */}
          Laissez-moi un commentaire!
        </div>
      }
    >
      <div className="m-auto flex w-full max-w-2xl flex-col items-center gap-8 ">
        <div className="grid w-full grid-cols-auto-fill-200-300 justify-center gap-4">
          {/* Commentaires - Exercise */}
          {isResolved
            ? comments.map((comment) => {
                return <Comment key={comment.id} {...comment} />;
              })
            : null}
          {isLoading || isIdle ? <Loader /> : null}
          {isRejected ? (
            <Typography variant="body1">
              {/* Sorry, there is an error : {error} */}
              Desolé, il y a eu une erreur: {error}
            </Typography>
          ) : null}
        </div>
        {/* pour ajouter une publication facebook! */}
        {/* <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid01HqF1feScWFB1nP6vsXZbs9h8BY2BXtU2ZosXLU6AsQ7zWjZx3Zm7rdQevVF31uMl%26id%3D61557617930908&show_text=true&width=500"
          width="500"
          height="341"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe> */}
        <CommentForm updateComment={run} />
      </div>
    </SectionWrapper>
  );
};
