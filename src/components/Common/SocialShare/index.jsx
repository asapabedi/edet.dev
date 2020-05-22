import React from 'react'
import { Twitter, Facebook, Whatsapp, Telegram } from 'react-social-sharing'
import classes from './socialshare.module.styl'

export const SocialShare = ({ link, message }) => (
  <aside className={`socialshare card ${ classes.socialshare }`}>
    <h4 className={classes.title}>Liked? Share!</h4>
    <p className={classes.description}>If you liked what you've seen so far? Share on social networks, it will motivate me to continue the work! 😃 </p>
    <nav className={classes.items}>
      <Twitter link={link} message={message} data-tooltip="Share on Twitter" solid small />
      <Facebook link={link} message={message} data-tooltip="Share on Facebook" solid small />
      <Whatsapp link={link} message={message} data-tooltip="Share on WhatsApp" solid small />
      <Telegram link={link} message={message} data-tooltip="Share on Telegram" solid small />
    </nav>
  </aside>
)
