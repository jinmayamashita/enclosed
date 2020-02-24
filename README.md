# Enclosed

Enclosed is a easy way of managing your small state in plain JavaScript.
you can think of Enclosed as [`React.useState`](https://reactjs.org/docs/hooks-reference.html#usestate).

(JavaScript closures have always been a bit of a mystery to me.)

## Examples

```js
import { enclosed } from "./src/enclosed";

const [getState, setState] = enclosed(10);

getState();
// 10

setState(s => s + 10);
getState();
// 100
```

### More examples

```ts
import { enclosed } from "./src/enclosed";

type Todo = { id: number; name: string };

const [getState, setState] = enclosed([{ id: 1, name: "foo" }]);

const push = (t: Todo) => setState(s => [...s, t]);
const update = (t: Todo) => setState(s => s.map(e => (t.id === e.id ? t : e)));
const remove = (id: Todo["id"]) => setState(s => s.filter(e => id !== e.id));

getState();
// [{id: 1, name: "foo"}]

push({ id: 9, name: "foo9" });
getState();
// [{id: 1, name: "foo"}, { id: 9, name: "foo9" }]

update({ id: 1, name: "boo" });
getState();
// [{id: 1, name: "boo"}, { id: 9, name: "foo9" }]

remove(9);
getState();
// [{id: 1, name: "foo"}]
```

## Todos

- [ ] Add a test spec later :pray:
- [ ] Documenting APIs
