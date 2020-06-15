import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
// import { utcToZonedTime } from 'date-fns-tz';
import styles from './styles.module.css'

const COLOR_RED = 'red'
const COLOR_GREEN = 'green'
const COLOR_CYAN = 'cyan'

type COLOR_THEMES = typeof COLOR_RED | typeof COLOR_GREEN | typeof COLOR_CYAN

type Props = {
    color?: COLOR_THEMES
    timezone?: string | null
}

const AnalogClock = ({ color = COLOR_CYAN }: Props) => {
    const [time, setTime] = useState({ seconds: 0 })
    const { seconds } = time

    // const memoizedHours = useMemo(() => {

        // return zeroPrepender(hours)
    //     return hours;
    // }, [hours])

    // const memoizedMinutes = useMemo(() => {
    //     return minutes;
        // return zeroPrepender(minutes)
    // }, [minutes])

    // const zeroedSeconds = seconds;

    const intervalInitiatiors = () => {
        setInterval(() => {
            const date = new Date()

            // const zonedTime = timezone ? null : date
            // const hours = date.getHours()
            // const minutes = date.getMinutes()
            const seconds = date.getSeconds()

            setTime({ seconds })
        }, 1000)
    }

    useEffect(() => {
        const initiateInterval = () => {
            intervalInitiatiors()
        }
        initiateInterval()
        document.documentElement.setAttribute('data-theme', color)
    }, [color])

    // console.log(seconds, 'seconds');

    /**
     * 360 in a circle
     * 
     */

    return (
        <div className={styles['clock-body']}>
            <div className={classnames(styles.seconds)} style={{transform: `rotate(${seconds * 6}deg)`}}/>
        </div>
    )
}

export default AnalogClock;
