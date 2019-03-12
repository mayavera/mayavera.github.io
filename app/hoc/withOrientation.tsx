
import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'

interface Orientation {
  alpha: number;
  beta: number;
  gamma: number;
  absolute: boolean;
}

export interface WrappedProps {
  orientation?: Orientation;
}

interface State {
  orientation?: Orientation;
}

const withOrientation = (WrappedComponent: React.ComponentType<WrappedProps>) => {
  class ComponentWithOrientation extends Component<{}, State> {
    public static displayName = `WithMotion(${getDisplayName(WrappedComponent)})`
    public readonly state: State = {}

    public componentDidMount() {
      if ((window as any).DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", this.handleChange);
      }
    }

    public componentWillUnmount() {
      if ((window as any).DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", this.handleChange);
      }
    }

    private handleChange = (event: DeviceOrientationEvent) => {
      this.setState({
        orientation: {
          alpha: event.alpha,
          beta: event.beta, 
          gamma: event.gamma,
          absolute: event.absolute
        }
      })
    }

    public render() {
      return <WrappedComponent orientation={this.state.orientation} {...this.props}/>
    }
  }

  hoistNonReactStatic(ComponentWithOrientation, WrappedComponent)

  return ComponentWithOrientation
}

export default withOrientation
