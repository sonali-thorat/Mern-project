import React from 'react';
import './Appti.css';
const Tech = () => {
  return (
    <>
    <div className='appti-head'>
      <h1>Any sufficiently advanced technology is equivalent to magic.</h1>
      <h5>Select any of the below Material to start your preparation today !</h5>
    </div>

    <div className='appti-block'>
       <div className='appti-link'>
        <h5>1. Programming  (Language, Tools & Technologies)</h5>   
        <a href="https://www.simplilearn.com/coding-interview-questions-article" title='programming languages' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Programming questions are an integral part of an interview for the developer's position. No matter which <br/> &nbsp;&nbsp;&nbsp;&nbsp;programming language you master, familiarity with fundamental concepts of programming is something that is always expected from you.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>2. Data Structure Algorithm</h5>   
        <a href="https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/" title='Data structure Algorithm' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Data structures are the building blocks of any computer program as they help in organizing and manipulating data in an efficient manner.<br/> &nbsp;&nbsp;&nbsp;&nbsp; Without data structures, the computer would be unable to understand how to follow a program's instructions properly.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>3. Object-Oriented Programming</h5>   
        <a href="https://www.javatpoint.com/oops-interview-questions" title='Object-Oriented Programming' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; OOPS, or Object-Oriented Programming system, is a fundamental concept in programming. If you are from a technical background,<br/>&nbsp;&nbsp;&nbsp;&nbsp; an interviewer expects you to know about OOPs. To make sure you do not miss the chance in your following interview.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>4.Dynamic Programming </h5>   
        <a href="https://www.javatpoint.com/dynamic-programming-interview-questions" title='Dynamic Programming' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Dynamic programming questions are 'mostly' not applicable in real-world settings. However, they can decently judge problem-solving<br/>&nbsp;&nbsp;&nbsp;&nbsp; capabilities of candidates which makes them a good choice for interviews.</p>
    </div>
    </>
  )
}

export default Tech;