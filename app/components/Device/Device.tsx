import React from 'react'
import classnames from 'classnames'
import { compose } from 'redux'
import withMotion, { WrappedProps as MotionProps } from '../../hoc/withMotion'
import withOrientation, { WrappedProps as OrientationProps } from '../../hoc/withOrientation'
import withMagneticField, { WrappedProps as MagneticFieldProps} from '../../hoc/withMagneticField';
import c from './Device.scss'

interface Props extends MotionProps, OrientationProps, MagneticFieldProps {
  className?: string;
}

interface State {
  position: Position;
}

class Device extends React.Component<Props, State> {
  public readonly state: State = {}
  public componentDidMount() {
    navigator.geolocation.watchPosition(this.handlePositionChange)
  }

  private handlePositionChange = (position: Position) => {
    this.setState({ position })
  }

  public render() {
    const { orientation, motion, magneticField } = this.props
    const { position } = this.state

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
          {magneticField && <>
            <h2>MagneticField</h2>
            <table>
              <tr>
                <td>X</td>
                <td>{Math.round(magneticField.x)}</td>
              </tr>
              <tr>
                <td>Y</td>
                <td>{Math.round(magneticField.y)}</td>
              </tr>
              <tr>
                <td>Z</td>
                <td>{Math.round(magneticField.z)}</td>
              </tr>
            </table>
          </>}
          {position && <>
            <h2>Position</h2>
            <table>
              <tr>
                <td>Timestamp</td>
                <td>{new Date(position.timestamp).toLocaleString()}</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td>{position.coords.accuracy}</td>
              </tr>
              <tr>
                <td>Altitude</td>
                <td>{position.coords.altitude}</td>
              </tr>
              <tr>
                <td>Altitude Accuracy</td>
                <td>{position.coords.altitudeAccuracy}</td>
              </tr>
              <tr>
                <td>Heading</td>
                <td>{position.coords.heading}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>{position.coords.latitude}</td>
              </tr>
              <tr>
                <td>Longitude</td>
                <td>{position.coords.longitude}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{position.coords.speed}</td>
              </tr>
            </table>
          </>}
        </div>
      </div>
    )
  }
}

export default compose(
  withMotion,
  withOrientation,
  withMagneticField(60)
)(Device)
