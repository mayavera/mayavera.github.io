import React from 'react'
import classnames from 'classnames'
import { compose } from 'redux'
import withMotion, { WrappedProps as MotionProps } from '../../hoc/withMotion'
import withOrientation, { WrappedProps as OrientationProps } from '../../hoc/withOrientation'
import c from './Device.scss'

interface Props extends MotionProps, OrientationProps {
  className?: string;
}

class Device extends React.Component<Props> {

  public render() {
    const { orientation, motion } = this.props

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
        </div>
      </div>
    )
  }
}

export default compose(
  withMotion,
  withOrientation
)(Device)
