# Workshop: Building your first React App

<p style='text-align: justify;'>This training workshop will cover the fundamentals of React. React.js is a an open-source JavaScript library for creating user interfaces with a focus on the UI and has become the tool of choice for easily building dynamic user interfaces.</p>

#### Requirements:
* Laptop
* Node/NPM (https://nodejs.org/en/download/)
* Chrome (https://www.google.com/chrome/)
* Chrome Extension - React Developer Tools (https://goo.gl/g16a7N)
* Text editor (https://code.visualstudio.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
### 1 - Installing Node

Make sure you have Node 8.10 or later on your local development machine.
```sh 
node -v
```

If you don’t, install the latest version: [https://nodejs.org/en/](https://nodejs.org/en/).  


### 2 - Running the Project

Verify that everything works by running:

```sh
git clone https://github.com/feedzai/first-react-app-workshop
cd first-react-app-workshop
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


If there are any questions, feel free to email me! jose.sousa@feedzai.com


---

## Step by step

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
```

To render multiple items in React, we pass an array of React elements. The most common way to build that array is to map over your array of data. Let’s do that in the render method of PhotoFeed:

```jsx
// src/components/PhotoFeed.js

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

Now in the `PhotoFeedPage` we need to save the `posts` state.

```js
// src/routes/PhotoFeedPage.js

_onLikeIncrement = (postId) => {
    const posts = likeIncrement(this.state.posts, postId);

    this.setState({
        posts
    });
};
```

After this the `Photo` component will re-render with the updated number of likes.

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