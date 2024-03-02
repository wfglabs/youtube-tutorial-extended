import React, { useState, useEffect } from 'react';
import { Box, Link, Typography, Card, Slide } from '@mui/material';

const cardTextStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
};

const ExtraContentLanding = () => {
    const [isOnMainScreen, setIsOnMainScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsOnMainScreen(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px', marginLeft: '20vh', marginRight: '20vh' }}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <Card>
                    <img style={{ height: '200px', width: '200px' }} src="watchVideo.png" />
                    <Typography sx={cardTextStyle}>Watch Tutorial</Typography>
                </Card>
            </Slide>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Card>
                    <img style={{ height: '200px', width: '200px' }} src="quiz.jpg" />
                    <Typography sx={cardTextStyle}>Solve Quiz</Typography>
                </Card>
            </Slide>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <Card>
                    <img style={{ height: '200px', width: '200px' }} src="activity.png" />
                    <Typography sx={cardTextStyle}>Do Some Activity</Typography>
                </Card>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Card>
                    <img style={{ height: '200px', width: '200px' }} src="certificate.png" />
                    <Typography sx={cardTextStyle}>Get Certified</Typography>
                </Card>
            </Slide>
        </Box>
    );
};

export default ExtraContentLanding;
