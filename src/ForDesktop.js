import React from 'react';

export const FilletDiv = ({
  style,
  ...props
}) => (
<div
  style={{
  width: '180px',
  height: '60px',
  background: 'white',
  border: '1px solid lightgray',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  ...style,
}}
  {...props}/>
)

export const BlueButton = ({
  hasBorderRadius = true,
  style,
  ...props
}) => (<div
  style={{
  background: 'rgb(51, 115, 227)',
  borderRadius: hasBorderRadius && '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...style
}}
  {...props}/>
)

export const ForDesktop = ({
  jobTitle = 'JOB TITLE',
  jobDescription = 'jobDescription',
  companyName = 'companyName',
  postedTime = 'Posted two days ago',
  onClickNext
}) => (
  <div
  style={{
    background: `url('https://static.zippia.com/galleries/2017/11/what-else-about-you-interview/4.jpg')`,
    height: 'calc(100vh - 76px)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }}>

  <div
    style={{
    width: '450px',
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
    <div style={{padding: '0 20px 20px 20px',}}>
      <p
        style={{
        height: '250px',
        overflow: 'scroll',
        
      }}
        dangerouslySetInnerHTML={{
        __html: jobDescription
      }}/>
      <div
        style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <FilletDiv >
          {companyName}
        </FilletDiv>
        <FilletDiv>
          {'Posted ' + postedTime}
        </FilletDiv>
      </div>
      <BlueButton style={{ margin: '20px auto auto auto', cursor: 'pointer', width: '175px', height: '50px'}} onClick={onClickNext}>
        Next
      </BlueButton>
    </div>
  </div>
  </div>
);