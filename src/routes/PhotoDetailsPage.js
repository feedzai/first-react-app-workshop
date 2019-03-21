import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Comment, Avatar } from "antd";
import moment from "moment";
import { Col, Row, Spin } from "antd";
import Photo from "../components/Photo";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import mockPosts from "../utils/mockPosts";
import base from "../utils/rebase";
import { addComent, likeIncrement } from "../utils/rebaseUtils";

const TEST_USER_NAME = "Han Solo";
const TEST_USER_AVATAR_URL = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

export default class PhotoDetailsPage extends PureComponent {
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    state = {
        value: "",
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.ref = base.syncState("/posts", {
            context: this,
            asArray: true,
            state: "posts",
            defaultValue: mockPosts,
            then: () => {
                this.setState({ loading: false });
            }
        });
    }

    _onSubmit = () => {
        if (!this.state.value) {
            return;
        }

        const posts = addComent(this.state.posts, this.props.match.params.postId, {
            author: TEST_USER_NAME,
            avatar: TEST_USER_AVATAR_URL,
            content: this.state.value,
            datetime: moment().fromNow()
        });

        this.setState({
            value: "",
            posts
        });
    };

    _onLikeIncrement = () => {
        const posts = likeIncrement(this.state.posts, this.props.match.params.postId);

        this.setState({
            posts
        });
    };

    _onCommentChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    _renderCommentList = (post) => {
        const { comments } = post;

        if (Array.isArray(comments) && comments.length > 0) {
            return (<CommentList comments={comments} />);
        }

        return null;
    };

    render() {
        const { value, loading } = this.state;

        if (loading) {
            return (<Spin />);
        }

        const post = this.state.posts.find((postElement) => postElement.id === this.props.match.params.postId);

        return (
            <div>
                <Row gutter={40}>
                    <Col key={"image_col"} span={10}>
                        <Photo {...post} onLikeIncrement={this._onLikeIncrement} />
                    </Col>
                    <Col key={"comments_col"} span={14}>
                        { this._renderCommentList(post) }

                        <Comment
                            avatar={(
                                <Avatar
                                    src={TEST_USER_AVATAR_URL}
                                    alt={TEST_USER_NAME}
                                />
                            )}
                            content={(
                                <CommentForm
                                    onChange={this._onCommentChange}
                                    onSubmit={this._onSubmit}
                                    value={value}
                                />
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
