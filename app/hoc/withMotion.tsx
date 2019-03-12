import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'

interface Motion {
  acceleration: DeviceAcceleration;
  accelerationIncludingGravity: DeviceAcceleration;
  rotationRate: DeviceRotationRate;
  interval: number;
}

export interface WrappedProps {
  motion?: Motion;
}

interface State {
  motion?: Motion;
}

const withMotion = (WrappedComponent: React.ComponentType<WrappedProps>) => {
  class ComponentWithMotion extends Component<{}, State> {
    public static displayName = `WithMotion(${getDisplayName(WrappedComponent)})`
    public readonly state: State = {}

    public componentDidMount() {
      if ((window as any).DeviceMotionEvent) {
        window.addEventListener("devicemotion", this.handleChange);
      }
    }

    public componentWillUnmount() {
      if ((window as any).DeviceMotionEvent) {
        window.removeEventListener("devicemotion", this.handleChange);
      }
    }

    private handleChange = (event: DeviceMotionEvent) => {
      this.setState({
        motion: {
          acceleration: event.acceleration,
          accelerationIncludingGravity: event.accelerationIncludingGravity, 
          rotationRate: event.rotationRate,
          interval: event.interval
        }
      })
    }

    public render() {
      return <WrappedComponent motion={this.state.motion} {...this.props}/>
    }
  }

  hoistNonReactStatic(ComponentWithMotion, WrappedComponent)

  return ComponentWithMotion
}

export default withMotion
