import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import scssStyle from './style.module.scss'
import cx from 'classnames'
import { Title, SubTitle } from './elements'

class StyleExample extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container text-center">
          <h1>Style Example</h1>
          <hr />
          {/* CSS Modules */}
          <p>
            <div className={style.titleCSSModule}>CSS Modules</div>
            <div className={cx('font-weight-bold', style.titleCSSModule)}>
              CSS Modules + normal class
            </div>
          </p>
          {/* Sass/SCSS Modules */}
          <p>
            <div className={scssStyle.titleSCSS}>Sass/SCSS Modules</div>
            <div className={cx('font-weight-bold', scssStyle.titleSCSS)}>
              Sass/SCSS Modules + normal class
            </div>
          </p>
          {/* CSS-in-JS */}
          <p>
            <div style={{ color: 'red' }}>CSS-in-JS</div>
          </p>
          {/* styled-components */}
          <p>
            <Title>styled-components</Title>
            <Title size="large">styled-components with props size: large</Title>
            <Title awesome>styled-components with props awesome</Title>
            <Title className="font-weight-bold">
              styled-components + normal class
            </Title>
            <Title>styled-components with normal class</Title>
            <SubTitle>styled-components</SubTitle>
          </p>
          <hr />
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }
}

export default StyleExample
