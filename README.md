# React Native LinkedText Component

LinkedText component for React Native (support for Android adn iOS). Provides component to render nested, styleable and clickable links within native Text component.

# Component's API

`LinkedText` component API is compatible with native `Text` API.

| Prop | Type | Default | Note |
| --- | --- | --- | --- |
| linkStyle | Object | | Style of the links rendered in text. |
| onLinkPress | Function  | | Callback method called whenever any of the links is pressed. Method is called with the object containing all the keys and values provided in the link data. |
| children | string | '' | Content to render in the component. |
| style | Object |  |  |

# Usage

If you want to add link in the `LinkedText` component you need to provide string with following pattern:

`{name=<VALUE>,<KEY1>=<VALUE>,<KEY1>=<VALUE>}`

`name` key is mandatory as this is the text of displayed link. Any other key-value pair is optional.

**Please note that if you want to pass a raw string into `LinkedText` component you need to wrap it in curly brackets and string quotes. Otherwise the JSX compiler will complain. It's not needed when passing a string variable.**

```javascript
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import LinkedText from 'rn-linked-text'

const styles = StyleSheet.create({
  text: {
    color: '#cccccc'
  },
  link: {
    color: '#ff0000',
    fontWeight: '500'
  }
})

class PrivacyTerms extends Component {
  
  onLinkPress = (linkData) => {
    console.log(linkData)
    /**
      If you click first link in this example linkData 
      object will contain:
      {
        name: "Terms of Use",
        url: "https://example.com/termsofuse",
        something: "hello"
      }
    */
  }

  render() {
    return (<LinkedText style={styles.text} linkStyle={styles.link} onLinkPress={onLinkPress}>
            {"I have read the {name=Terms of Use,url=https://example.com/termsofuse,something=hello} and the {name=Privacy Policy,url=https://example.com/privacypolicy}. I agree with the validity of the Terms of Use."}
          </LinkedText>)
  }
}

export default PrivacyTerms

```