import React from 'react'
import styled from 'styled-components'

import { media } from 'theme'
import airplaneIcon from 'ui/Icons/airplane.svg'

type TProps = {
  stopsCount: string | null
  originRaw: string
  destinationRaw: string
  departureDate: string
  arrivalDate: string
  departureTime: string
  arrivalTime: string
}

const Root = styled.div`
  flex: 1;
  padding: 26px 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Time = styled.span`
  line-height: 26px;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;

  ${media.desktop`
  width: 100%;
    margin-bottom: 20px;
  `};
`

const StopsDivider = styled.div`
  height: 26px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;

  ${media.desktop`
    margin-bottom: 20px;
  `};
`

const StopsCountRaw = styled.span`
  line-height: 12px;
  text-transform: uppercase;
  max-height: 12px;

  color: ${({ theme }) => theme.colors.grayText};
  font-size: ${({ theme }) => theme.fontSizes[0]};
`

const IconDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AirplaneIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${airplaneIcon});
  background-position: center center;
  background-repeat: no-repeat;
  margin-left: 1px;
`

const AirplaneLine = styled.div`
  height: 1px;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.border};
`

const Info = styled.div<{ alignItems: string }>`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0 2px;

  align-items: ${({ alignItems }) => alignItems};
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
    <Info alignItems="flex-start">
      <Location>{originRaw}</Location>
      <Date>{departureDate}</Date>
    </Info>
    <Info alignItems="flex-end">
      <Location>{destinationRaw}</Location>
      <Date>{arrivalDate}</Date>
    </Info>
  </Root>
)
