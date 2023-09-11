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

  console.log(comments); //renvoie bien les commentaires---

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
              color: "#C424FF",
              marginRight: "15px",
            }}
          />{" "}
          Leave a comment !
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
              Sorry, there is an error : {error}
            </Typography>
          ) : null}
        </div>
        <CommentForm updateComment={run} />
      </div>
    </SectionWrapper>
  );
};
