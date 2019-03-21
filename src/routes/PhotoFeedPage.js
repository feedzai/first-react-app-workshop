import React, { PureComponent } from "react";
import base from "../utils/rebase";
import mockPosts from "../utils/mockPosts";
import { likeIncrement } from "../utils/rebaseUtils";

export default class PhotoFeedPage extends PureComponent {
    state = {
        posts: []
    };

    componentDidMount() {
        this.ref = base.syncState("/posts", {
            context: this,
            asArray: true,
            state: "posts",
            defaultValue: mockPosts
        });
    }

    _onLikeIncrement = (postId) => {
        const posts = likeIncrement(this.state.posts, postId);

        /* TODO 2 -  */
    };

    render() {
        return (
            <span>TODO-1</span>
        );
    }
}
