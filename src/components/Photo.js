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

    _onClickLike = () => {
        this.props.onLikeIncrement(this.props.id);
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
                        {likes}  <Icon type="heart" onClick={this._onClickLike} />
                    </b>,
                    <span key="comments">
                        {comments.length} <Icon type="message" />
                    </span>
                ]}
            >
                <Link to={`/${id}`}>
                    <Meta description={caption} />
                </Link>
            </Card>
        );
    }
}
