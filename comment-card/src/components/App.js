import React from "react";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author={"Jake"}
          date={"2 days ago"}
          msg={"Good job!"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author={"John"}
          date={"3 days ago"}
          msg={"Terrific!"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author={"Jay"}
          date={"5 days ago"}
          msg={"Wonderful!"}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
