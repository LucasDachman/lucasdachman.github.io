import React from 'react';
import resumePDF from '../images/lucas-dachman-resume-2019.pdf'
import NavHeader from '../components/nav-header'
import SEO from "../components/seo"

const Resume = () => {
  return (
    <>
      <SEO title="Resume" />
      <NavHeader current='resume' />
      <main id='resume'>
        <embed
          type='application/pdf'
          src={resumePDF}
          height={1080}
          width={800}
        />
      </main>
    </>
  );
}

export default Resume;