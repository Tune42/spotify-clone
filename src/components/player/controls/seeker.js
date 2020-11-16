import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 325,
    },
  })

const Seeker = ({API, playerState}) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (playerState) {
            setValue((playerState.position / playerState.duration) * 100);
            if (!playerState.paused) {
                const interval = setInterval(() => {
                    setValue(value => {
                        const newPosition = (value / 100) * playerState.duration;
                        return ((newPosition + 1000) / playerState.duration) * 100;
                    });
                }, 1000);
                return () => clearInterval(interval);
            }
        }
    }, [playerState]);

    const handleChange = (event, newValue) => {
        API.seek(Math.floor((newValue / 100) * playerState.duration))
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return(
        <div className={classes.root}>
            <Slider value={value} onChangeCommitted={handleChange} aria-labelledby="continuous-slider" />
        </div>
    )
}

export default Seeker;