# React StickIt

Simple React sticky without the bullshit.

```js
import React from 'react'
import StickIt from 'react-stick-it'

const Sidebar = props => <div>Sticky sidebar</div>
const scrollAfter = 100

export default StickIt(Sidebar, scrollAfter)
```

### Please note
I don't reserve any credit for this. It's the most basic sticky HOC I put together having read many others out there, this one fits my purpose.

I'm also using this as a way to experiment pushing react components to NPM.
