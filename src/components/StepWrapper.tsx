'use client'
import React from 'react'
import {Container, Stepper, Step, StepLabel, Grid, Card} from '@mui/material'

interface StepWrapperProps {
    activeStep: number
    children: any
}

const steps = ['Информация о треке', 'Загрузить обложку', 'Загрузить сам трек']
const StepWrapper = ({activeStep,children}: StepWrapperProps) => {
  return (
    <Container >
        <Stepper activeStep={activeStep}>
            {steps.map((step, index) => 
                    <Step
                        key={step}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
        </Stepper>
        <Grid
            container
            justifyContent = 'center'
            sx={{margin:"70px", height: '270px'}}
        >
            <Card sx={{width: '600px'}}>
                {children}
            </Card>
        </Grid>
    </Container>
  )
}

export default StepWrapper