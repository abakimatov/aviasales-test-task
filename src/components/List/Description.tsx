import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import airplaneIcon from 'ui/Icons/airplane.svg'

type TProps = {
  originRaw: string
  arrivalTime: string
  arrivalDate: string
  departureDate: string
  departureTime: string
  destinationRaw: string
  stopsCount: string | null
}

const Root = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 26px 25px;
  align-items: flex-start;
  justify-content: flex-start;
`

const Time = styled.span`
  line-height: 26px;
  text-align: center;

  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.fontSizes[5]};

  ${media.desktop`
    width: 100%;
    margin-bottom: 20px;
  `};
`

const StopsDivider = styled.div`
  flex: 1;
  height: 26px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  ${media.desktop`
    margin-bottom: 20px;
  `};
`

const StopsCountRaw = styled.span`
  max-height: 12px;
  line-height: 12px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.grayText};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`

const IconDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AirplaneIcon = styled.div`
  width: 14px;
  height: 14px;
  margin-left: 1px;
  background-repeat: no-repeat;
  background-position: center center;

  background-image: url(${airplaneIcon});
`

const AirplaneLine = styled.div`
  flex: 1;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.border};
`

const Info = styled.div<{ textAlign: string }>`
  width: 50%;
  padding: 0 2px;
  margin-top: 10px;

  text-align: ${({ textAlign }) => textAlign};
`

const Location = styled.span`
  line-height: 19px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.darkText};
`

const Date = styled.span`
  line-height: 18px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.grayText};
`

export const Description: React.FC<TProps> = ({
  stopsCount,
  originRaw,
  destinationRaw,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime
}): JSX.Element => (
  <Root>
    <Time>{departureTime}</Time>
    <StopsDivider>
      <StopsCountRaw>{stopsCount}</StopsCountRaw>
      <IconDivider>
        <AirplaneLine />
        <AirplaneIcon />
      </IconDivider>
    </StopsDivider>
    <Time>{arrivalTime}</Time>
    <Info textAlign="left">
      <Location>{originRaw}</Location>
      <br />
      <Date>{departureDate}</Date>
    </Info>
    <Info textAlign="right">
      <Location>{destinationRaw}</Location>
      <br />
      <Date>{arrivalDate}</Date>
    </Info>
  </Root>
)
