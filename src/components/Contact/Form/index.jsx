import React, { Component } from 'react'
import {
  withFormik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import { Alert } from 'components/Common'
import classes from './form.module.styl'
import './form.styl'

const isEmail = str =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str) // eslint-disable-line

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
}

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      message: {
        success: `Your email has been sent successfully.
                  You will get a response soon.`,
        error: `Error sending your email.`
      }
    }
  }

  render () {
    const {
      services,
      status,
      values,
      errors,
      touched,
      isSubmitting,
      isValid
    } = this.props

    const { message } = this.state

    return (
      <Form
        name="contact"
        method="POST"
        action="/success"
        className={`card form ${ classes.form }`}
        data-netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleChangeField} />
          </label>
        </p>

        <legend>
        Fill in your details below and wait for me to contact you.
        </legend>

        {isSubmitting &&
          <Alert message="Sending, please wait..." type="info" />
        }
        {status &&
          <Alert message={message.success} type="success" />
        }

        {/* {(status && status.error) && <Alert message={message.error} type="danger" />} */}

        <div className={classes.group}>
          <label htmlFor="formName" className={classes.label}>
          Full name
          </label>
          <Field
            name="name"
            render={({ field }) => (
              <input
                {...field}
                id="formName"
                disabled={isSubmitting}
                value={values.name || ''}
                type="text"
                className={
                  `form__input ${ classes.input } ${ errors.name && touched.name ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="name">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formName">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formEmail" className={classes.label}>
            Email address
          </label>
          <Field
            name="email"
            render={({ field }) => (
              <input
                {...field}
                id="formEmail"
                type="email"
                value={values.email || ''}
                disabled={isSubmitting}
                className={
                  `form__input ${ classes.input } ${ errors.email && touched.email ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="email">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formEmail">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formPhone" className={classes.label}>
            Mobile number (WhatsApp)
          </label>
          <Field
            name="phone"
            render={({ field }) => (
              <input
                {...field}
                id="formPhone"
                value={values.phone || ''}
                disabled={isSubmitting}
                className={
                  `form__input ${ classes.input } ${ errors.phone && touched.phone ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="phone">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formPhone">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formService" className={classes.label}>
          Service
          </label>
          <Field
            component="select"
            name="service"
            render={({ field }) => (
              <select
                {...field}
                id="formService"
                disabled={isSubmitting}
                value={values.service || ''}
                className={
                  `form__input ${ classes.input } ${ classes.select } ${ errors.service && touched.service ? classes.inputError : '' }`
                }
              >
                <option value="">Select service</option>
                {services.map((service, i) => (
                  <option key={i} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            )}
          />

          <ErrorMessage name="service">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formService">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formBudget" className={classes.label}>
            Budget
          </label>
          <Field
            component="select"
            name="budget"
            render={({ field }) => (
              <select
                {...field}
                id="formBudget"
                disabled={isSubmitting}
                value={values.budget || ''}
                className={
                  `form__input ${ classes.input } ${ classes.select } ${ errors.budget && touched.budget ? classes.inputError : '' }`
                }
              >
                <option value="">Select a budget</option>
                <option value="&lt; ₦ 50,000">&lt; ₦ 50,000</option>
                <option value="₦ 50,000 - ₦ 80,000">₦ 50,000 - ₦ 80,000</option>
                <option value="₦ 80,000 - ₦ 100,000">₦ 80,000 - ₦ 100,000</option>
                <option value="₦ 150,000 &gt;">₦ 150,000 &gt;</option>
              </select>
            )}
          />
          <ErrorMessage name="budget">
            {msg =>
              <label
                className={`${ classes.alertError }`}
                htmlFor="formBudget"
              >
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label
            htmlFor="formMessage"
            className={classes.label}
          >
            Your message
          </label>
          <Field
            component="textarea"
            name="message"
            render={({ field }) => (
              <textarea
                {...field}
                id="formMessage"
                value={values.message || ''}
                className={
                  `form__input ${ classes.input } ${ classes.textarea } ${ errors.message && touched.message ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="message">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formMessage">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={`${ classes.group } ${ classes.footer }`}>
          <small>*All fields are mandatory</small>
          <button
            type="submit"
            className={`button button--primary ${ classes.button }`}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting && `Sending...`}
            {!isSubmitting && `Okay, send`}
          </button>
        </div>
      </Form>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => defaultValues,

  validate (values) {
    const errors = {}
    const items = Object.entries(values)

    if (!isEmail(values.email)) {
      errors.email = `Email looks invalid.`
    }

    items
      .filter(field => field[1] === '')
      .map(field => {
        const _field = field[0]
        errors[_field] = `This field is mandatory.`
      })

    return errors
  },

  async handleSubmit (values, { resetForm, setStatus, setSubmitting }) {
    setStatus({ error: false, success: false })
    setSubmitting(true)

    await sleep(2000).then(() =>
      fetch(`/contact`, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values })
      })
        .then(() => resetForm({}))
        .then(() => setSubmitting(false))
        .then(() => setStatus({ success: true }))
        .catch(() => setStatus({ error: true }))
    )
  }
})(ContactForm)
