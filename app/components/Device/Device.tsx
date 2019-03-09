import React from 'react'
import classnames from 'classnames'
import c from './Device.scss'

interface Props {
  className?: string;
}

interface State {
  orientation?: {
    alpha: number;
    beta: number;
    gamma: number;
  };
}

export default class Device extends React.Component<Props, State> {
  public readonly state: State = {}

  public componentDidMount() {
    if ((window as any).DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.handleOrientationChange);
    }
  }

  public componentWillUnmount() {
    if ((window as any).DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.handleOrientationChange);
    }
  }

  private handleOrientationChange = (event: DeviceOrientationEvent) => {
    this.setState({
      orientation: {
        alpha: event.alpha,
        gamma: event.gamma, 
        beta: event.beta
      }
    })
  }

  public render() {
    const { orientation } = this.state

    return (
      <div className={classnames(this.props.className, c.device)}>
        <div>
          <div>Alpha: {orientation ? Math.round(orientation.alpha) : 'Unknown'}</div>
          <div>Beta: {orientation ? Math.round(orientation.beta) : 'Unknown'}</div>
          <div>Gamma: {orientation ? Math.round(orientation.gamma) : 'Unknown'}</div>
        </div>
      </div>
    )
  }
}
