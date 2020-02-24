type Func<S> = (state: S) => S;
type SetState<S> = (s: Func<S> | S) => void;

type Enclosed = <S>(state: S) => [() => S, SetState<S>];
export const enclosed: Enclosed = state => [
  () => state,
  _fs => {
    if (typeof _fs === "function") {
      // type casting isn't necessary.
      const f = _fs as Func<typeof state>;
      f(state);
      return;
    }
    state = _fs;
  }
];
