import React from 'react'
import WhatsAppUrl from 'whatsapp-url'

export const More = ({ data, classes }) => {
  const whatsAppLink = WhatsAppUrl({
    phone: data.site.siteMetadata.author.phone,
    text: `Hello Abednego! I saw your site and would love to chat.`
  })

  return (
    <div className={classes.text}>
      <h2>Lets connect</h2>
      <p>
      If you want random, regular updates on what I've been doing with my life, you can...{' '}
      </p>

      <p>
          🐤 follow me on Twitter{' '}
        <a
          href="https://twitter.com/asapabedi"
          rel="noopener noreferrer"
          target="_blank"
        >
            @asapabedi
        </a>
      </p>
      <p>
          📷 follow me on Instagram
        <a
          href="https://instagram.com/asapabedi"
          rel="noopener noreferrer"
          target="_blank"
        >
            @asapabedi
        </a>
          .
      </p>
      <p>If you prefer a more direct contact you can call me...</p>
      <p>
      📞 or drop a line on{' '}
        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
          .
      </p>
      <p>
        ✉️ Or if you prefer you can send an email to{' '}
        <a
          href="mailto:asapabedi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
            asapabedi@gmail.com
        </a>{' '}
          it also works!
      </p>
    </div>
  )
}
