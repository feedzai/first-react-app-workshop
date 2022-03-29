import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Input } from "antd";

const TextArea = Input.TextArea;

const propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

function CommentForm({ onChange, onSubmit, value }) {
    return (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    onClick={onSubmit}
                    type="primary"
                >
                    Add Comment
                </Button>
            </Form.Item>
        </>
    );
}

CommentForm.propTypes = propTypes;

export default React.memo(CommentForm);
