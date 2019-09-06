import React from 'react'

//MUI stuff
import Grid from '@material-ui/core/Grid'

//Components
import Upload from "../upload/Upload";

export default function home() {
    return (
        <Grid container>
            <Grid item sm={3} xs={1}/>
            <Grid item sm={6} xs={10}>
                <div className="Card">
                    <Upload />
                </div>
            </Grid>
            <Grid item sm={3} xs={1}/>
        </Grid>
    )
}
