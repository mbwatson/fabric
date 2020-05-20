import React, { useEffect } from 'react'

export const TwitterFeedModule = ({ count = 10 }) => {
    useEffect(() => {
        const anchor = document.createElement('a')
        anchor.setAttribute('class', 'twitter-timeline')
        anchor.setAttribute('data-theme', 'light')
        anchor.setAttribute('width', '100%')
        anchor.setAttribute('data-tweet-limit', count)
        anchor.setAttribute('data-chrome', 'noheader nofooter noborders')
        anchor.setAttribute('href', 'https://twitter.com/FABRICtestbed')
        document.getElementsByClassName('twitter-embed')[0].appendChild(anchor)

        const script = document.createElement('script')
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
        document.getElementsByClassName('twitter-embed')[0].appendChild(script)
    }, [])

    return (
        <section className="twitterFeed">
            <div className="twitter-embed"></div>
            <br/>
            <a href="https://twitter.com/FABRICtestbed" target="_blank" rel="noopener noreferrer">@FABRICtestbed</a>
            <br/><br/>
        </section>
    )
}
