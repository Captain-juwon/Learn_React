import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Header from './Header';

const initialValues = {
    name: '',
    description: ''
}

const onSubmit =  values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    description: Yup.string().required('Required!')
})

function Blog () { 
    return (
        <div>
        <Header 
            title="Blog Writing"
            text="Write a Blog and post"
        />
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
            >
                {formik => (
                    <Form>
                        
                        <FormikControl 
                        control='input'
                        type='text'
                        label='Title'
                        name='name' 
                        />
                        
                        <FormikControl 
                        control='textarea'
                        label='Description'
                        name='description' 
                        />

                        <button type='submit'>Submit</button>            
                    
                    </Form>
                )
            }
        </Formik>
        </div>
    )
    
};

export default Blog;