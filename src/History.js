import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import theme from './theme';
import { AGMmetaData } from './dataFiles/AGMs';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        paddingBottom: '40px',
    },
    summary: {
        paddingTop: '20px',
        paddingBottom: '10px',
        maxWidth: '70%',
        margin: '0 auto',
    },
    history: {
        display: 'block',
        textAlign: 'left',
    },
    title: {
        paddingTop: '20px',
        fontSize: theme.typography.title.fontSize,
    },
    agmPhotos: {
        textAlign: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        paddingBottom: '20px',
    }
});

export default function History() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h1">History</Typography>
            <div className={classes.agmPhotos}>
                <Typography className={classes.summary}>
                    Find below a set of fantastic pictures provided by Lawrence showing the awarding
                    of the championship trophy at AGM meetings. Many faces are still present and
                    recognised by members today and it shows the rich history that we are lucky to have.
                </Typography>
                <Carousel 
                    navButtonsAlwaysVisible={true}
                    interval="10000"
                >
                    {
                        AGMmetaData.map((item, i) =>
                            <div>
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Grid alignContent='center' item xs={8} key="history">
                                        <Card raised="true" className={classes.history}>
                                            <CardContent>
                                                <center>
                                                    <Typography textAlign='center'> {item.name} </Typography>
                                                </center>
                                                <img width="100%" src={item.path} alt={item.name} />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    }
                </Carousel>
            </div>
            <Typography className={classes.title} variant="h1">Club History</Typography>
            <Typography className={classes.summary}>
                Below is an excellent brief history of the club stretching back
                into the 19th century penned by Lawrence Bland.
            </Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid alignContent='center' item xs={8} key="history">
                    <Card raised="true" className={classes.history}>
                        <CardContent>
                            <Typography>
                                A meeting was held on October 29th 1895 at the Market Street Coffee
                                Tavern to consider forming a chess club in Lancaster. A General Meeting
                                held again at the Coffee Tavern on November 7th formed Lancaster Chess
                                Club, Alec Munro was president with T. Warwick secretary & treasurer.
                                Meeting every Thursday with yearly subscriptions of 2/6 with 6d entrance
                                fee.<br /><br />

                                The club moved in 1900-01 to Maddocks Central Café in Market Square,
                                later known as the Empire café, demolished after WW2, becoming a
                                Littlewood’s Store, latterly a Morrison Store, which at present is closed.
                                The club continued until September 1916 and closed for the rest of WW1.
                                Reopening in October 1919, in the Palladium Cinema Café in Market Square,
                                which was used for the 1919-20, this is now W.H.Smiths. In September 1920
                                the club moved to a smallish room above Tylers shoe shop on Cheapside,
                                continuing there until February 1953, this is now part of McDonalds.<br /><br />

                                The club closed down for the whole of World War Two, a Post War Revival
                                Meeting was held on October 1st 1945, which also celebrated the jubilee
                                of the club. Having to move from above Tylers shoe shop owing to
                                structural and other alterations planned by the owners, the spent the
                                end of 1952-53 & 1953-54 seasons at the Friends Hall in Fenton Street,
                                which didn’t prove popular, so the club to 43 West Road, a private house,
                                which had been used for friendly matches since the war, they stayed there
                                from 1954 to 1960. In 1960, the club moved to the Royal Hotel in Thurnham
                                Street and in 1964 moved to the Alexander Hotel (now the closed Revolution
                                Bar), then in 1968 to the Oddfellows Hall in Queen Street, then in 1979 to
                                the basement of the Trades Hall in Fenton Street and finally to the
                                Reform Club in September 1981, originally playing in the ground level
                                room, moving to the 1st floor before settling in our present top floor
                                room.<br /><br />

                                The club celebrated it’s 75th anniversary on November 20th 1971 with
                                John Littlewood giving a simultaneous display at the Royal Kings Arms,
                                followed by a dinner at the hotel.<br /><br />

                                The club has had a regular programme of friendlies over the years,
                                with the ‘Roses Match’ with York starting in 1983, the most recent event.
                                We help form a Lancaster Chess League in 1905, which continued until 1922,
                                although the league didn’t run every season. The present Lancaster, Morecambe
                                & District Chess League was formed in 1956 and has continued to the present
                                day. The Lancashire Chess Association was formed in 1897 and we joined in
                                1898-99, playing in various county leagues over the years and national
                                competitions. Major H.A.Proctor (later MP for Accrington) and probably
                                the son of the Rev.H.A.Proctor , who was club secretary in 1910-12, gave
                                five guineas for a club championship table, this was made at Waring & Gillow
                                for £6 10/-. The club champion has the right to sit it this table,
                                although handicap were used in the championship pre-war! In 1962-63,
                                Eric Fay presented the club with an inlaid oak and mahogany chess
                                table made by his father.<br /><br />

                                The 1st Lancaster One-Day Congress was started in 1980 and continued
                                for many years. Many good players have been members of the club over
                                the years, including Tony Ball, Edward Boswell (world famous problemist),
                                Dick Collins, A.C.Haines, Samuel Keir, Kazimerz Lenartowicz,
                                Sandor Szalanczi, Fred Turner and Ian Wells (tragically drowned in Brazil
                                age 17 in 1982).
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}