import styled from '@emotion/styled';
import { Grid, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';


const StyledListItem = styled(ListItem)`
}`
const FooterLinks = () => {

    return (

        <Grid container>

            <Grid item xs={12} md={3}>
                <Typography size="h4">Sitemap</Typography>

                <List sx={{textTransform: 'capitalize', alignSelf: 'center'}}>
                    <Stack direction="column">
                        <StyledListItem
                        //  sx={{ transform: 'rotate(2deg)' }}
                        >
                            <Link to="#home" smooth>
                                <Typography size="body">home</Typography>
                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'scale(1.35) rotate(-5deg)' }}
                        >
                            <Link to="#agenda" smooth>
                                <Typography size="body">agenda</Typography>

                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'rotate(3deg)' }}
                        >
                            <Link to="#videos" smooth>
                                <Typography size="body">videos</Typography>

                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}
                        >
                            <Link to="#contact" smooth>
                                <Typography size="body">contato</Typography>
                            </Link>
                        </StyledListItem>
                    </Stack>
                </List>
            </Grid>

            <Grid item xs={12} md={3}>
                <Typography size="h4">Mais sobre</Typography>

                <List sx={{ alignSelf: 'center', textTransform: 'capitalize', }}>
                    <Stack direction="column">
                        <StyledListItem
                        //  sx={{ transform: 'rotate(2deg)' }}
                        >
                            <Link to="#home" smooth>
                                <Typography size="body">historia</Typography>
                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'scale(1.35) rotate(-5deg)' }}
                        >
                            <Link to="#agenda" smooth>
                                <Typography size="body">formação</Typography>

                            </Link>
                        </StyledListItem>

                    </Stack>
                </List>
            </Grid>
        </Grid>


    )
}

export default FooterLinks