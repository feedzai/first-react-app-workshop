# Workshop: Building your first React App

<p style='text-align: justify;'>This training workshop will cover the fundamentals of React. React.js is a an open-source JavaScript library for creating user interfaces with a focus on the UI and has become the tool of choice for easily building dynamic user interfaces.</p>

## Requirements:

### Using Codesanbox

- Laptop
- An internet connection
- [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/feedzai/first-react-app-workshop)

### Using your computer locally:

- Laptop
- Node/NPM (https://nodejs.org/en/download/)
- Chrome/Edge/Firefox
- Chrome Extension - React Developer Tools (https://goo.gl/g16a7N)
- Text editor (https://code.visualstudio.com/)

#### 1 - Installing Node

Make sure you have Node 8.10 or later on your local development machine.

```sh
node -v
```

If you don’t, install the latest version: [https://nodejs.org/en/](https://nodejs.org/en/).

#### 2 - Running the Project

Verify that everything works by running:

```sh
git clone https://github.com/feedzai/first-react-app-workshop
cd first-react-app-workshop
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If there are any questions, feel free to email me! joao.dias@feedzai.com

---

## Tutorial Step-by-step

### Your First React App

### Step 1 - Let's have a look around, shall we?

Let's go to the `src` folder and check all the sub-folders there.

- `assets` - This is where all the global styles are
- `components` - This is where all the react components live
- `pages` - Like the `components` folder, but for the app pages
- `services` - This is were the special functions that connect to firebase live
- `utils` - This is were we setup Firebase

Now let's go to the `public` folder:

- This is a static folder, were we host our `index.html` file.
  - Notice that we have a little special loader between the `#root` folder.
  - This is removed once React kicks-in, but it helps out to showcase some content before that happens.
  - The favicon is an SVG file that adapts itself to dark and light modes.

### Step 2 - Get the app router to work

First we need to make the single-page app understand our url structure. Each different url equals a different page. Some urls even support special placeholder characters so that they can be rendered dinamically. To do that, let's go to the `App.js` component.

```jsx
// src/App.js

function App() {
  return (
    <div className="app" role="application">
      <Router>
        <Routes>
          {/*<Route path="/chat/:person" element={<ConversationPage />} />
          <Route path="/chat" element={<ChatsPage />} />
          <Route path="/" element={<HomePage />} />*/}
        </Routes>
      </Router>
    </div>
  );
}
```

Now we need to display the each page in between the `Router` component. So, let's uncomment the code and have a look at it.

Each `Route` component comes from the `react-router` library. They define each page and accept one of our components to display. We can also define a path, which is the section of the url that comes after the domain.

Now, the `/chat` and `/` paths are pretty self-explanatory. But the `/chat/:person` is a litte different. The `:person` bit is sort of a template that we can use later on the app.

```js
<Router>
  <Routes>
    <Route path="/chat/:person" element={<ConversationPage />} />
    <Route path="/chat" element={<ChatsPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
</Router>
```

After uncommenting the code we should now be able to see the new rendered pages.

### Step 3 - Get the latest people and show the cards

Show, there are no cards showing, right?
That's ok, we're going to take care of that now.
To do that, let's first import a special hook from react, called `useEffect`.

```js
// src/CardsList/index.js
import React, { useEffect, useState } from "react";
```

This `useEffect` hook enables you to perform any type of side-effects on a function component.
So, each time a component is mounted, re-renders or unmounts, we can run code inside these hooks.
These hooks accept two arguments:

- a callback function
- an array of dependencies

We want to subscribe to the `"people"` collection from our firebase firestore.
And we can do that once the component mounts, since that subscription will be alive through out the whole lifecycle of the component.

So, let's use the `getPeople` services function that we've built for you to abstract the part of fetching the data from the server. This function accepts a callback function, so we will use the `allUsers` array to update our component's state.

There's already a function to do that - `setUsers`.

```jsx
// src/CardsList/index.js

useEffect(() => {
  // Use the `getPeople` function and update the users state
  // once the server has responded with a list.
  const unsubscribe = getPeople((allUsers) => setUsers(allUsers));

  return () => {
    // Since we're simulating a server response with a delay,
    // we also need to clear our timeout, or else the timeout
    // would continue to be kept in memory
    clearTimeout();

    // We also need to remove the firebase subscription
    unsubscribe();
  };
}, []);
```

Still no cards? That's fine, there's one little bit left.

To render multiple items in React, we pass an array of React elements. The most common way to build that array is to map over your array of data. Let’s do that in the `renderList` function.

```jsx
/**
 * Render an array of `Card` components
 *
 * @returns {JSX.Element[]}
 */
function renderList() {
  // Go through each user and return a `Card` component with the necessary props
  // 1. Convert the distance in meters to kilometers;
  // 2. Don't forget the key
  const listOfUsers = users.map((person) => {
    const convertedDistance = (person.distance / 1000).toFixed(1);

    return <Card key={person.name} distance={convertedDistance} person={person} />;
  });

  return listOfUsers;
}
```

Now the cards should appear! 👌
Play with them, swiping left and right.

### Step 4 - Get the bottom buttons and modal showing

Let's also show the bottom buttons by uncommenting the code comment on the `SwipeButtons`, `SpecialModal` components and `handleOnClickButtons` and `handleOnCloseModal` functions.

Click on any of the bottom buttons, and a funny modal should appear! 😉

### Step 5 - Fetch the list of messages from the server

Now, notice on the footer bar, there's a button on the right. That's the messages icon and, if you click on it, it will lead you to the chats page.

So...let's click on it!

Wait, there are no messages? 😱

Again, it's fine. It's because we haven't fetched the list of messages from firebase.

To do that, let's go to `Chats` component and do the `useEffect` bit again. This time we use the `getConversations` function

```jsx
// src/components/Chats/index.js

useEffect(() => {
  const unsubscribe = getConversations((allMessages) => setMessages(allMessages));

  // When the component unmounts, remove the messages subscription and the fake timeout
  return () => {
    unsubscribe();
  };
}, []);
```

Now that we have an array of messages, let's render them out on the screen!
To do that, we will render them by using the `renderMessages` function:

```jsx
function renderMessages() {
  const list = messages.map((msg) => {
    return (
      <Chat
        key={msg.id}
        id={msg.id}
        name={msg.name}
        message={msg.messages[msg.messages.length - 1].message}
        timestamp={msg.timestamp}
        profilePic={msg.profilePicture}
      />
    );
  });

  return list;
}
```

So, basically, for every message, a `Chat` component.
That's great, we should now have a list of messages showing up.

### Step 6 - Send the message data to a specific message screen

We're almost there to have our basic app running!
Now the only thing we need to do is, on each click on each message, have some sort of way to send over to the conversation screen some unique identifier that we can use to pick that message out from the full list of messages.

Well, we have!
Notice that every entry on the `messages` array as an `id` field.
We can use that and pass it to the element that receives our click - The `Link` component.
The prop is `state` and it accepts an object.

```jsx
<Link className={styles.chat} to={`/chat/${nameForUrl}`} state={{ id }}>
  <div className={styles.container}>
    <Avatar className={styles.image} alt={name} src={profilePic} />
    <div className={styles.details}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.message}>{message}</p>
    </div>
    <time className={styles.timestamp}>{convertedTimestamp}</time>
  </div>
</Link>
```

Now, a click on the `Link` component will lead us to the `Conversation` page.
We can also have a look at the browser's url bar and see that the `:person` template is now being replaced with the users name from the clicked link.

We now have to reach over to `react-router` and use a special hook (yes, we can create our own custom hooks with react) to get the `location` properties of that page, including the `state`.

```jsx
import { useLocation } from "react-router";

...

// Inside the component, at the top
const location = useLocation();
```

So, we have access to the location.
We still need to fetch the conversations again, right? It's like we did before.

There are a couple of differences right now:

- We only want to show one conversation
- We have access to the clicked id

So, we need to pick the only conversation that matters. We can do that using the `useEffect` hook, the `getConversation` function and the `find` method for the callback `allMessages` object.

```jsx
useEffect(() => {
  const unsubscribe = getConversations((allMessages) => {
    // Using the `find` method we can pick the message we want
    // by comparing the source id with our location state id.
    // If if matches, that's our guy!
    const conversation = allMessages.find((message) => message.id === location.state.id);

    // We only update the state if we have an actually usable result
    if (conversation) {
      setChat(conversation);
    }
  });

  // When the component unmounts, remove the messages subscription
  return () => {
    unsubscribe();
  };
}, [location.state.id]);
```

And that's it!
We've covered a lot of ground today.
There's way more things to learn about React.
More hooks, more design patterns, more ways to improve our performance, etc.

But, there's one more thing...

### 4 - PropTypes

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property.

Import the `PropTypes` and use them on our components.

```js
import PropTypes from "prop-types";
```

## See it run 🚀

You're at the end of your journey, and you've accomplished a lot. **Congrats, You are awesome!**

---

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
