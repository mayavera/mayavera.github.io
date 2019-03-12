import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from 'react-display-name'

interface MagneticField {
  x: number;
  y: number;
  z: number;
}

export interface WrappedProps {
  magneticField?: MagneticField;
}

interface State {
  magneticField?: MagneticField;
}

const Magnetometer = (window as any).Magnetometer

const withMagneticField = (frequency: number) => (WrappedComponent: React.ComponentType<WrappedProps>) => {
  class ComponentWithMotion extends Component<{}, State> {
    public static displayName = `WithMotion(${getDisplayName(WrappedComponent)})`
    public readonly state: State = {}

    public componentDidMount() {
      if (Magnetometer) {
        const magnetometer = new Magnetometer({ frequency })

        magnetometer.addEventListener("reading", this.handleChange);
      }
    }

    private handleChange = (event: MagneticField) => {
      this.setState({
        magneticField: {
          x: event.x,
          y: event.y, 
          z: event.z
        }
      })
    }

    public render() {
      return <WrappedComponent magneticField={this.state.magneticField} {...this.props}/>
    }
  }

  hoistNonReactStatic(ComponentWithMotion, WrappedComponent)

  return ComponentWithMotion
}

export default withMagneticField
