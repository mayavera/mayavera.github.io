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
  motion?: {
    acceleration: DeviceAcceleration;
    accelerationIncludingGravity: DeviceAcceleration;
    rotationRate: DeviceRotationRate;
    interval: number;
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

    if ((window as any).DeviceMotionEvent) {
      window.addEventListener("devicemotion", this.handleMotionChange);
    }

    window.addEventListener('deviceproximity', this.handleDeviceProximityChange)
    window.addEventListener('userproximity', this.handleUserProximityChange)
  }

  public componentWillUnmount() {
    if ((window as any).DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.handleOrientationChange);
    }

    if ((window as any).DeviceMotionEvent) {
      window.removeEventListener("devicemotion", this.handleMotionChange);
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

  private handleMotionChange = (event: DeviceMotionEvent) => {
    this.setState({
      motion: {
        acceleration: event.acceleration,
        accelerationIncludingGravity: event.accelerationIncludingGravity, 
        rotationRate: event.rotationRate,
        interval: event.interval
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
    const { orientation, motion, userProximity, deviceProximity } = this.state

    return (
      <div className={classnames(this.props.className, c.device)}>
        <div>
          {orientation && <div>
            <h2>Orientation</h2>
            <table>
              <tr>
                <td>Alpha</td>
                <td>{Math.round(orientation.alpha)}</td>
              </tr>
              <tr>
                <td>Beta</td>
                <td>{Math.round(orientation.beta)}</td>
              </tr>
              <tr>
                <td>Gamma</td>
                <td>{Math.round(orientation.gamma)}</td>
              </tr>
              <tr>
                <td>Absolute</td>
                <td>{orientation.absolute ? 'true' : 'false'}</td>
              </tr>
            </table>
          </div>}
          {motion && <>
            <h2>Motion</h2>
            <table>
              <tr>
                <td>Acceleration</td>
                <td>{Math.round(motion.acceleration.x)}</td>
                <td>{Math.round(motion.acceleration.y)}</td>
                <td>{Math.round(motion.acceleration.z)}</td>
              </tr>
              <tr>
                <td>Acceleration (including gravity)</td>
                <td>{Math.round(motion.accelerationIncludingGravity.x)}</td>
                <td>{Math.round(motion.accelerationIncludingGravity.y)}</td>
                <td>{Math.round(motion.accelerationIncludingGravity.z)}</td>
              </tr>
              <tr>
                <td>Interval</td>
                <td>{Math.round(motion.interval)}</td>
              </tr>
              <tr>
                <td>Rate of Rotation</td>
                <td>{Math.round(motion.rotationRate.alpha)}</td>
                <td>{Math.round(motion.rotationRate.beta)}</td>
                <td>{Math.round(motion.rotationRate.gamma)}</td>
              </tr>
            </table>
          </>}
          {userProximity && <>
            <h2>User Proximity</h2>
            <table>
              <tr>
                <td>User Near</td>
                <td>{userProximity.userNear}</td>
              </tr>
            </table>
          </>}
          {deviceProximity && <>
            <h2>Device Proximity</h2>
            <table>
              <tr>
                <td>Min</td>
                <td>{Math.round(deviceProximity.deviceMin)}</td>
              </tr>
              <tr>
                <td>Max</td>
                <td>{Math.round(deviceProximity.deviceMax)}</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>{Math.round(deviceProximity.deviceValue)}</td>
              </tr>
            </table>
          </>}
        </div>
      </div>
    )
  }
}
