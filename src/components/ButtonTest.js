import React from 'react'
import Form from 'react-bootstrap/Form'

function ButtonTest() {
  return(
    <Form >
      button test component - New to SCC?
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="New to SCC/CBC project"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="Returning to SCC/CBC project"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
        <Form.Check
          inline
          label="Not Applicable"
          name="group1"
          type={type}
          id={`inline-${type}-3`}
        />

        

        {/* <Form.Check
          inline
          disabled
          label="4 (disabled)"
          type={type}
          id={`inline-${type}-4`}
        /> */}
      </div>
    ))}
        SCC employees only - driving for position? 
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group2"
        type={type}
        id={`inline-${type}-1`}
      />
     
      <Form.Check
        inline
        label="No"
        name="group2"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="Not Applicable"
        name="group2"
        type={type}
        id={`inline-${type}-3`}
      />
      </div>
      ))}
        Will employee be transporting children? 
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group3"
        type={type}
        id={`inline-${type}-1`}
      />
     
      <Form.Check
        inline
        label="No"
        name="group3"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="Not Applicable"
        name="group3"
        type={type}
        id={`inline-${type}-3`}
      />
      </div>
      ))}
        Attending PreService? 
      {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Yes"
        name="group4"
        type={type}
        id={`inline-${type}-1`}
      />
     
      <Form.Check
        inline
        label="Already Certified"
        name="group4"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="Needs Waiver Test"
        name="group4"
        type={type}
        id={`inline-${type}-3`}
      />
      <Form.Check
        inline
        label="Not Applicable"
        name="group4"
        type={type}
        id={`inline-${type}-4`}
      />
      </div>
      ))}

  </Form>
  )
;
}

export default ButtonTest