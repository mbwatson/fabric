import React from 'react'
import { Page } from './src/layouts'
import './src/styles/base.scss'
import './src/styles/globals.scss'

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return (
        <Page>
            { element }
        </Page>
    )
}

export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="hubspot"
        type="text/javascript"
        src="//js.hs-scripts.com/6342968.js"
      />,
  ]);
}