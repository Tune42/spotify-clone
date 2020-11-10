import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 200,
    marginTop: '10px',
  },
});

export default function ContinuousSlider({API}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    API.setVolume(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown onClick={(e) => handleChange(e, 0)} />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} style={{color: '#1ED760'}} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp onClick={(e) => handleChange(e, 100)} />
        </Grid>
      </Grid>
    </div>
  );
}
