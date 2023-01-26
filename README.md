# hypercore-nine

> hypercore v9 with promise support

You probably shouldn't use this.

The main use case is for migrating data from hypercore v9 to v10.

This package provides the [same api as hypercore v9](https://github.com/holepunchto/hypercore/tree/14a24911856f2a5a57b4a26140339dfce0884c2c), except with promise support.

```js
import hypercore from 'hypercore-nine'

const core = hypercore('db')
await core.ready() // etc.
```
