import React from 'react';
import './Appti.css';
const Appti = () => {
  return (
    <>
    <div className='appti-head'>
      <h1 className='color'>Whats your interest?</h1>
      <h5 className='color'>Select any of the below Material to start your preparation today !</h5>
    </div>

    <div className='appti-block'>
       <div className='appti-link'>
        <h5>1. Quantitative Aptitude for Number System </h5>   
        <a href="https://www.tutorialspoint.com/quantitative_aptitude/aptitude_number_system.htm" title='Number System in Apptitude' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Numerical aptitude defines an individual's ability to perform tasks that require working with data and numbers. <br/>&nbsp;&nbsp;&nbsp;&nbsp;An applicant with a high numerical aptitude can perform complex computations, perceive and process numbers, and analyze data with the utmost ease.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>2. Quantitative Aptitude for CAT</h5>   
        <a href="https://unacademy.com/content/cat/how-to-prepare-for-cat-exam-at-home/#:~:text=Answer%3A%20Yes%2C%20you%20can%20start,exam%20on%20the%20first%20attempt." title='Aptitude for CAT' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;The CAT Quant Questions include a wide range of topics like number systems, time and work, geometry, etc. Most of the CAT Quantitative<br/> &nbsp;&nbsp;&nbsp;&nbsp; Aptitude topics are from basic Mathematics that individuals studied at their school levels.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>3. Word Power made easy:-Probability</h5>   
        <a href="https://www.javatpoint.com/aptitude/probability-1" title='Probability' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Probability refers to the quantitative measure of the likelihood of an event occurring. It is either expressed in percentages or proportions<br/>  &nbsp;&nbsp;&nbsp;&nbsp;in the range 0% to 100% or 0 to 1 respectively.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>4. Arithmetic Reasoning </h5>   
        <a href="https://www.indiabix.com/verbal-reasoning/arithmetic-reasoning/" title='Arithmetic Reasoning' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Arithmetic Reasoning assesses a candidate's mathematical knowledge. Arithmetic Reasoning questions are typically numerical,<br/> &nbsp;&nbsp;&nbsp;&nbsp; hence they often include computation components.</p>
    </div>
    </>
  )
}

export default Appti;