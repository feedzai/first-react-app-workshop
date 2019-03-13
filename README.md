This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

### Your First React App 
### 1 - Our first component 
First we need to render a feed of posts so we will need to create the `PhotoFeed` component. To start this will render only a `<div>` with a text inside.

```jsx
// src/components/PhotoFeed.js
  export default class PhotoFeed extends PureComponent {
    render() {
        return (
            <div className="App-body">
                PhotoFeed
            </div>
        );
    }
}
```

Now we need to display the component in the `PhotoFeedPage`, first import the `PhotoFeed` in the `PhotoFeedPage`.

```js
// src/routes/PhotoFeedPage.js

import PhotoFeed from "../components/PhotoFeed";
```

After importing we need to render the component, in the render method of `PhotoFeedPage` add the previously created component and pass by props the `posts` and the `onLikeIncrement` function.

```js
// src/routes/PhotoFeedPage.js

render() {
    return (
        <PhotoFeed
            posts={this.state.posts}
            onLikeIncrement={this._onLikeIncrement}
        />
    );
}
```

In our `PhotoFeed` component, we need to show all the posts passed throught props. On the render method we need to iterate through a list of Posts. 

Import the `Photo` component and `Col`, `Row` from Ant Design.

```jsx
// src/components/PhotoFeed.js

import Photo from "./Photo";
import { Col, Row } from "antd";
```

To render multiple items in React, we pass an array of React elements. The most common way to build that array is to map over your array of data. Let’s do that in the render method of PhotoFeed:

```jsx
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
```

### 2 - Update the State something changes

React components can have state by setting `this.state` in the constructor, which should be considered private to the component.
 
In this application the state is stored in the `PhotoDetailsPage` component and then passed to the children components via props.

Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in the passed state update and re-render the component along with its descendants. 

#### 2.1 - Post Liking

```jsx
// /src/components/Photo.js

{likes}  <Icon  type="heart"  onClick={this._onClickLike}  />
```
On `Photo` component we need to add a callback `_onClickLike` to the existing Icon component. The `_onClickLike` will call `onLikeIncrement` that is passed to Photo component via props by `PhotoDetailsPage` component, this function updates the posts that are stored in state and calls the setState function with the updated posts.

```js
// src/components/Photo.js

_onClickLike = () => {
    this.props.onLikeIncrement(this.props.id);
}
```

After this the `Photo` component will re-render with the updated number of likes.

#### 2.2 - Comment change

Create a method called `_onCommentChange` that updates the state with the current form input `value`.

```jsx
// src/routes/PhotoDetailsPage.js

_onCommentChange = (e) => {
    this.setState({
        value: e.target.value
    });
};
```

This `value` stored in state is then used when the user clicks the Submit button. The method `_onSubmit` is called and will add the comment object to an array of posts that is also stored in React state. 

When the component re-renders, `this.state.posts` will have one more post and then the list will be updated.

### 3 - Add a new Route 

Now we will want to create a new Route to enable us when clicking on a post to go to the details page.

```jsx
// /src/app/App.js

<Route
    path="/:postId"
    component={PhotoDetailsPage}
/>
```
We setup a `Route` in `App` component defining a path, in this case `/:postId`. This path parameter can be accessed by `this.props.match.params.{nameOfTheParameter}` and the component that should be rendered, in this case `PhotoDetailsPage`.


Finally for each `Photo` component we need to add a `Link` that when clicked will change the route of our application to `PhotoDetailsPage` component.

```jsx
// /src/components/Photo.js

<Link to={`/${id}`}>
    <Meta description={caption} />
</Link>
```

### 4 - PropTypes

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property.

Import the `PropTypes`.

```js
// src/components/PhotoFeed.js

import PropTypes from 'prop-types';
```

On the `PhotoFeed` component set the prop `posts` to the type `array` and `required` and the prop `onLikeIncrement` to the type `func` and `required`.

```js
// src/components/PhotoFeed.js

static propTypes = {
    posts: PropTypes.array.isRequired,
    onLikeIncrement: PropTypes.func.isRequired
};
```

## See it run 🚀

You're at the end of your journey, and you've accomplished a lot.  **Congrats, You are awesome!**

--- 
### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify