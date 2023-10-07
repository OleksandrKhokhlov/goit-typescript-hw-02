/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps<T> {
  title: T;
}

class Component<T> {
  constructor(public props: ComponentProps<T>) {}
}

class Page<T> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
