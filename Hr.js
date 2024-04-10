import React from 'react';
import './Appti.css';
const Hr = () => {
  return (
    <>
    <div className='appti-head'>
      <h1 className='color'>How to prepare for an HR interview,<br/> including potential interview questions</h1>
      <h5 className='color'>Select any of the below Material to start your preparation today !</h5>
    </div>

    <div className='appti-block'>
       <div className='appti-link'>
        <h5>1. HR interview questions </h5>   
        <a href="https://www.avadolearning.com/blog/how-to-prepare-for-an-hr-interview-including-potential-interview-questions/" title=' HR interview questions' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;The goal of any HR interview is to assess a candidate's qualifications for the job they are interviewing for.<br/> &nbsp;&nbsp;&nbsp;&nbsp;HR interview questions help interviewers to determine whether or not a candidate is a good fit for the desired position. </p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>2. Soft skills</h5>   
        <a href="https://in.indeed.com/career-advice/interviewing/soft-skills-interview-questions-and-answers" title='Soft skills' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;If you’re new to HR, you can lean on your soft skills, especially since good HR candidates need to be organised, personable,<br/> &nbsp;&nbsp;&nbsp;&nbsp; able to take initiative, and prepared to work hard. Things like first aid courses can be listed here, as well.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>3. Skills profile and further training</h5>   
        <a href="https://www.skillties.com/blog/skill-profile#:~:text=Skills%20profiling%20provides%20them%20with,becomes%20profitable%20in%20their%20careers." title='Skills profile and further training' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;This is where you can show off the skills you have that are directly applicable to the job you’re applying for. Use bullet points<br/> &nbsp;&nbsp;&nbsp;&nbsp;or a numbered list, and be as specific as possible, using relevant key words like resource planning, talent acquisition or management.</p>
    </div>
    <div className='appti-block'>
       <div className='appti-link'>
        <h5>4.Resume Samples </h5>   
        <a href="https://novoresume.com/career-blog/resume-examples" title='Resume Samples' target='_blank'>click me</a>
        </div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Writing a great resume is a crucial step in your job search. If you’re looking for a well-written example resume for <br/> &nbsp;&nbsp;&nbsp;&nbsp;inspiration, we have a selection of resume samples to get you started.</p>
    </div>
    </>
  )
}

export default Hr;