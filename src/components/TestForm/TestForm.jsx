import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  search: '',
};

export class TestForm extends Component {
  handleSubmit = (values, actions) => {
    const { search } = values;
    console.log('Search:', search);

    actions.resetForm();
  };

  render() {
    const searchInputId = nanoid();
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <Form>
          <label htmlFor={searchInputId}>
            <button type="submit">Send</button>
            <Field
              type="search"
              name="search"
              id={searchInputId}
              placeholder="Search..."
            />
            <ErrorMessage name="search" component="div" />
          </label>
        </Form>
      </Formik>
    );
  }
}
