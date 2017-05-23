import React, { Component } from 'react'

export default (WrappedComponent, stickyAfter) => {
  return class StickItComponent extends Component {
    static defaultProps = {
      stickyAfter: 0
    }

    state = {
      sticky: false
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll = () => {
      const { sticky } = this.state

      if (window.scrollY >= stickyAfter && !sticky) {
        this.setState({
          sticky: true
        })
      }

      else if (window.scrollY < stickyAfter && sticky) {
        this.setState({
          sticky: false
        })
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}
