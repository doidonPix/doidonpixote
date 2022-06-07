import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { FlexSpacer } from '../atoms/FlexSpacer';
import Typography from '../atoms/Typography';

const DivLoading = styled(Stack)`

    z-index: 99999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: rgb(0 0 0);
    height: 100%;
    align-items: center;
    padding: 2rem 10rem;
    color: white;
`;

const CenterVertical = styled(Stack)`
    margin: auto 0;
`;

const CenterTitle = styled(Stack)`
    align-items: center;
    justify-content: space-between;
`;

const OneLine = styled(Stack)`
    display: inline;
`;

export const Loader: FC = ({ ...props }) => {
    console.log("Loader");

    return (
        <DivLoading direction="column" className='loader'>
            <CenterVertical>
                <img src="/images/SVG/logo-rot.svg" alt="doidon brand home" width={400} height={450} />

                <CenterTitle>
                    <OneLine>
                        <Typography size='16px'>
                            Carregando
                            <FlexSpacer minWidth={1} />
                            <img src="/images/loader.gif" alt="doidon loader" width={20} height={20} style={{ filter: 'invert(1)' }} />
                        </Typography>
                    </OneLine>
                </CenterTitle>
            </CenterVertical>
        </DivLoading>
    );
};