// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { processText } from './utils'
import styles from './styles'

class LinkedText extends Component {
  static defaultProps = {
    linkStyle: styles.link,
    onLinkPress: () => {},
  }

  renderNestedLink = (index, linkData) => (
    <Text
      style={[styles.link, this.props.linkStyle]}
      onPress={() => {
        this.props.onLinkPress(linkData)
      }}
      key={index}
    >
      {linkData.name}
    </Text>
  )

  render() {
    const { linkStyle, style, onLinkPress, children, ...restProps } = this.props
    return (
      <Text style={[styles.container, style]} {...restProps}>
        {processText(children, this.renderNestedLink)}
      </Text>
    )
  }
}

LinkedText.propTypes = {
  children: PropTypes.string,
  style: PropTypes.style,
  linkStyle: PropTypes.style,
  onLinkPress: PropTypes.func,
}

export default LinkedText
