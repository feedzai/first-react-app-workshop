import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Chat.module.scss";
import { kebabCase } from "lodash";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

/**
 * @typedef {object} ChatProps
 *
 * @property {string} id
 * @property {string} name
 * @property {string} message
 * @property {string} profilePic
 * @property {string} timestamp
 */

/**
 * Chat Screen
 *
 * @param {ChatProps} props
 * @returns {JSX.Element}
 */
function Chat({ id, name, message, profilePic, timestamp }) {
  const nameForUrl = kebabCase(name.toLowerCase());
  const convertedTimestamp = dayjs().to(dayjs(timestamp));

  // STEP 6: Send the message data to a specific message screen
  return (
    <Link
      className={styles.chat}
      to={`/chat/${nameForUrl}`}
      state={{
        id,
        name,
      }}
    >
      <div className={styles.container}>
        <Avatar className={styles.image} alt={name} src={profilePic} />
        <div className={styles.details}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.message}>{message}</p>
        </div>
        <time className={styles.timestamp}>{convertedTimestamp}</time>
      </div>
    </Link>
  );
}

export default Chat;