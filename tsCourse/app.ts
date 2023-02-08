class Component<T> {
  constructor (public props:T) {

  }
}

interface IProps {
title: string,
}

class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}