import React from "react";
import PropTypes from "prop-types";
import { Comment, List } from "antd";

const propTypes = {
    comments: PropTypes.array.isRequired
};

function CommentList({ comments }) {
    return (
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
            itemLayout="horizontal"
            renderItem={(props) => <Comment {...props} />}
        />
    );
}

CommentList.propTypes = propTypes;

export default React.memo(CommentList);
