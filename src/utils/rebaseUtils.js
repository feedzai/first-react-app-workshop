import { union } from "lodash";

export function likeIncrement(posts, postId) {
    return posts.map((post) => {
        if (post.id === postId) {
            return {
                ...post,
                likes: post.likes + 1
            };
        }

        return post;
    });
}

export function addComent(posts, postId, commentObject) {
    return posts.map((post) => {
        if (post.id === postId) {
            return {
                ...post,

                // It's important to create a new array so that PureComponent knows it needs to re-render
                comments: union(post.comments, [commentObject])
            };
        }

        return post;
    });
}
