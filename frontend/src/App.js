import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


const useStyles = makeStyles((theme) => createStyles({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  fixedHeight: {
    height: 240,
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const updateSensorReadings = (cb) =>
  axios.get('/api/v1/sensors')
    .then(res => {
      cb(res.data);
    })
    .catch(e => {
      console.log(e);
    });

const setLight = (status) =>
      axios.post('/api/v1/light', { status }, {
        headers: {
          'Content-Type': 'application/json'
        }})
    .then(res => console.log(res.data))
    .catch(e => {
      console.log(e);
    });

const perceptionValues = [
  "Dry",
  "Very comfortable",
  "Comfortable",
  "Ok",
  "Uncomfortable",
  "Quite uncomfortable",
  "Very uncomfortable",
  "Severe uncomfortable",
];

const lightConfigValues = [
  "Always ON",
  "Always OFF",
  "Scheduled"
];

function App() {
  const classes = useStyles();
  const [sensors, setSensors] = useState({});

  useEffect(() => {
    updateSensorReadings(setSensors);
    const intervalHandle = setInterval(() => updateSensorReadings(setSensors), 10000);
    return () => clearInterval(intervalHandle);
  }, []);

  const perception = useMemo(() => perceptionValues[sensors.perception],
                             [sensors.perception]);
  const lightConfig = useMemo(() => lightConfigValues[sensors.lightConfig],
        [sensors.lightConfig]);

  const deviceTime = useMemo(()=> new Date(sensors.ts * 1000).toString(), [sensors.ts]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const setLightAndUpdate = (configValue) => {
    setLight(configValue).then(() => updateSensorReadings(setSensors));
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <Box>
    Temperature: {sensors.temperature}
    </Box><Box>
              Humidity: {sensors.humidity}
    </Box><Box>
              Absolute hum.: {sensors.absHumidity}
    </Box><Box>
              Dew point: {sensors.dewPoint}
    </Box><Box>
              Perception: {perception}
    </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              Luminescence: {sensors.luminescence}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              Water level: {sensors.waterLevel}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Paper className={fixedHeightPaper}>
              <WbIncandescentIcon />
              <Box>
    Light: {sensors.light ? "ON" : "OFF"}
    </Box>
              <Box>
                Configuration: {lightConfig}
              </Box>
              <Box>
                Time: {deviceTime}
    </Box>
              <Box className={classes.buttons}>
                <Button variant="contained" onClick={() => setLightAndUpdate(0)}>Off</Button>
                <Button variant="contained" onClick={() => setLightAndUpdate(1)}>On</Button>
                <Button variant="contained" onClick={() => setLightAndUpdate(2)}>Schedule</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default App;
