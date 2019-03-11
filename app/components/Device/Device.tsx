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
    absolute: boolean;
  };
  deviceProximity?: {
    deviceMax: number;
    deviceMin: number;
    deviceValue: number;
  };
  userProximity?: {
    userNear: boolean;
  };
}

export default class Device extends React.Component<Props, State> {
  public readonly state: State = {}

  public componentDidMount() {
    if ((window as any).DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.handleOrientationChange);
    }

    window.addEventListener('deviceproximity', this.handleDeviceProximityChange)
    window.addEventListener('userproximity', this.handleUserProximityChange)
  }

  public componentWillUnmount() {
    if ((window as any).DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.handleOrientationChange);
    }

    window.removeEventListener('deviceproximity', this.handleDeviceProximityChange)
    window.removeEventListener('userproximity', this.handleUserProximityChange)
  }

  private handleOrientationChange = (event: DeviceOrientationEvent) => {
    this.setState({
      orientation: {
        alpha: event.alpha,
        gamma: event.gamma, 
        beta: event.beta,
        absolute: event.absolute
      }
    })
  }

  private handleDeviceProximityChange = (event: any) => {
    this.setState({
      deviceProximity: {
        deviceMax: event.max as number,
        deviceMin: event.min as number,
        deviceValue: event.value as number
      }
    })
  }

  private handleUserProximityChange = (event: any) => {
    this.setState({
      userProximity: {
        userNear: event.near
      }
    });
  }

  public render() {
    const { orientation, userProximity, deviceProximity } = this.state

    return (
      <div className={classnames(this.props.className, c.device)}>
        <div>
          <h2>Orientation</h2>
          <table>
            <tr>
              <td>Alpha</td>
              <td>{orientation ? Math.round(orientation.alpha) : 'Unknown'}</td>
            </tr>
            <tr>
              <td>Beta</td>
              <td>{orientation ? Math.round(orientation.beta) : 'Unknown'}</td>
            </tr>
            <tr>
              <td>Gamma</td>
              <td>{orientation ? Math.round(orientation.gamma) : 'Unknown'}</td>
            </tr>
            <tr>
              <td>Absolute</td>
              <td>{orientation ? (orientation.absolute ? 'true' : 'false') : 'Unknown'}</td>
            </tr>
          </table>
          <h2>User Proximity</h2>
          <table>
            <tr>
              <td>User Near</td>
              <td>{userProximity ? userProximity.userNear : 'Unknown'}</td>
            </tr>
          </table>
          <h2>Device Proximity</h2>
          <table>
            <tr>
              <td>Min</td>
              <td>{deviceProximity ? Math.round(deviceProximity.deviceMin) : 'Unknown'}</td>
            </tr>
            <tr>
              <td>Max</td>
              <td>{deviceProximity ? Math.round(deviceProximity.deviceMax) : 'Unknown'}</td>
            </tr>
            <tr>
              <td>Value</td>
              <td>{deviceProximity ? Math.round(deviceProximity.deviceValue) : 'Unknown'}</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
