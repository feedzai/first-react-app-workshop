import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import { Col, Row } from "antd";

export default class PhotoFeed extends PureComponent {
    render() {
        const { posts, onLikeIncrement } = this.props;

        return (
            <div className="App-body">
                <Row gutter={40}>
                    {posts.map((post) => (
                        <Col key={`col_${post.id}`} span={8}>
                            <Photo {...post} onLikeIncrement={onLikeIncrement} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
