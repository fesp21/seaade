import React, { Component } from "react"
import { PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"

import styles from "./Page.scss"
import Title from "../../components/Title"

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
    mainColClass: PropTypes.string,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      __filename,
      __url,
      head,
      body,
    } = this.props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />
        <Title
          title={ head.title }
          subtitle={ head.subtitle }
        />
        <div className="container">
        {
          body &&
          <div className="row">
            <div className={ styles.mainCol }>
              <div
                className={ styles.content }
                dangerouslySetInnerHTML={ { __html: body } }
              ></div>
            </div>
          </div>
        }
        { this.props.children }
        </div>
      </div>
    )
  }
}
