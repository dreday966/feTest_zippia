import React from 'react';
import { FilletDiv, BlueButton } from './ForDesktop';

export const ForMobile = ({
  jobTitle = 'JOB TITLE',
  jobDescription = 'jobDescription',
  companyName = 'companyName',
  postedTime = 'Posted two days ago',
  onClickNext
}) => (

  <div
    style={{
    width: '100%',
    background: 'white',
    borderRadius: '3px',
    overflow: 'hidden'
  }}>
    <div
      style={{
      background: 'rgb(243,243,243)',
      height: '70px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      {jobTitle}
    </div>
    <div 
      style={{
        padding: '15px 20px 40px 20px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex'
      }}>
      <p
        style={{
        height: '200px',
        overflow: 'scroll',
      }}
        dangerouslySetInnerHTML={{
        __html: jobDescription
      }}/>
        <FilletDiv style={{width: '75%', marginTop: '20px'}}>
          {companyName}
        </FilletDiv>
        <FilletDiv style={{width: '75%', marginTop: '20px'}}>
          {'Posted ' + postedTime}
        </FilletDiv>
    </div>
    <BlueButton 
      hasBorderRadius={false}
      style={{ margin: '20px auto auto auto', cursor: 'pointer', height: '50px'}} 
      onClick={onClickNext}>
        Next
    </BlueButton>
  </div>
);