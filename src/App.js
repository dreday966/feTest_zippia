import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import zippiaLogo from './zippia_logo_headerNew.png';
import {Subject, Observable} from 'rxjs';
import { fetchJobs } from './fetchData';
import { ForMobile } from './ForMobile'; 
import { ForDesktop } from './ForDesktop'; 

// map data from sever to component props.
const mapRawDataToProps = jobRawData => ({jobTitle: jobRawData.jobTitle, jobDescription: jobRawData.jobDescription, companyName: jobRawData.companyName, postedTime: jobRawData.postedDate})

const Job = ({
  jobData,
  displayMode,
  onClickNext
}) => <div>
  <img src={zippiaLogo}/> {/* header */}
  {
    displayMode === 'forDesktop' // two different view display same data
      ? <ForDesktop onClickNext={onClickNext} {...mapRawDataToProps(jobData)}/>  
      : <ForMobile onClickNext={onClickNext} {...mapRawDataToProps(jobData)}/>
  }
</div>


class App extends Component {

  state = {
    jobs: null,
    currentIndex: 3,
    displayMode: 'forMobile'
  }

  subscription;

  componentWillMount() {
    // fetch jobs data
    fetchJobs(1).then(({jobs}) => this.setState({jobs}))

    // add resize event, check whether window width is larger then 425px
    this.subscription = Observable.fromEvent(window, 'resize')
      .pluck('target', 'innerWidth')
      .map(width => width > 425 ? 'forDesktop' : 'forMobile')
      .subscribe(displayMode => this.setState({displayMode}))
  }

  componentWillUnMount() {
    this.subscription.unsubscribe();
  }

  render() {
    
    // every click on next button will add one to currentIndex, and job info changed.
    const {jobs, currentIndex, displayMode} = this.state;
    const jobData = jobs && jobs[currentIndex];

    return (
      <div className="App">
        {jobData && <Job displayMode={displayMode} onClickNext={() => this.setState({currentIndex: this.state.currentIndex + 1})} jobData={jobData}/>}
      </div>
    );
  }
}

export default App;
