import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default class Photo extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        onLikeIncrement: PropTypes.func.isRequired,
        comments: PropTypes.array
    }

    render() {
        const {
            id,
            imgSrc,
            caption,
            likes,
            comments = []
        } = this.props;

        return (
            <Card
                hoverable
                cover={<img alt={id} src={imgSrc} />}
                actions={[
                    <b key="like">
                        {likes} <Icon type="heart" onClick={null/* TODO-2 */} />
                    </b>,
                    <span key="comments">
                        {comments.length} <Icon type="message" />
                    </span>
                ]}
            >
                {null /* TODO-3 */}
                <Meta description={caption} />
            </Card>
        );
    }
}
