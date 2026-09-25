import { type FormEvent, useState, type ReactNode } from 'react'
import { site } from '../data/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'
type FormValues = { name: string; email: string; phone: string; guests: string; date: string; time: string; message: string }

const initialValues: FormValues = { name: '', email: '', phone: '', guests: '2', date: '', time: '', message: '' }

export function ReservationForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState<FormState>('idle')
  const [error, setError] = useState('')

  const update = (field: keyof FormValues, value: string) => setValues((current) => ({ ...current, [field]: value }))

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    if (!values.name.trim() || !values.date || !values.time) {
      setStatus('error'); setError('Please complete your name, date, and preferred time.'); return
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setStatus('error'); setError('Please enter a valid email address so we can confirm your request.'); return
    }
    if (!/^[+\d][\d\s().-]{7,}$/.test(values.phone)) {
      setStatus('error'); setError('Please enter a valid phone number, including the country code if possible.'); return
    }
    setStatus('loading')
    window.setTimeout(() => {
      if (values.email.toLowerCase().includes('fail')) {
        setStatus('error')
        setError('The request could not be held just now. Please call the room directly or try again.')
      } else {
        setStatus('success')
      }
    }, 1100)
  }

  if (status === 'success') return <div className="reservation-success" role="status">
    <span className="success-mark">✦</span>
    <span className="eyebrow">Request received</span>
    <h2>We’ll make room<br />for you, {values.name.split(' ')[0]}.</h2>
    <p>A confirmation is on its way to {values.email}. Our maître de maison will be in touch shortly to make the evening precise.</p>
    <button className="text-button" type="button" onClick={() => { setValues(initialValues); setStatus('idle') }}>Make another request <span>↗</span></button>
  </div>

  return <form className="reservation-form" onSubmit={submit} noValidate>
    <div className="form-heading"><span className="eyebrow">Your evening</span><p>Tell us how the night should begin.</p></div>
    <div className="form-grid">
      <Field label="Name" id="name" required><input id="name" name="name" autoComplete="name" value={values.name} onChange={(event) => update('name', event.target.value)} placeholder="Your name" required /></Field>
      <Field label="Email" id="email" required><input id="email" name="email" autoComplete="email" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} placeholder="you@example.com" required /></Field>
      <Field label="Phone" id="phone" required><input id="phone" name="phone" autoComplete="tel" type="tel" value={values.phone} onChange={(event) => update('phone', event.target.value)} placeholder="+33 6 00 00 00 00" required /></Field>
      <Field label="Guests" id="guests" required><select id="guests" name="guests" value={values.guests} onChange={(event) => update('guests', event.target.value)}>{[1, 2, 3, 4, 5, 6, 7, 8].map((number) => <option key={number} value={number}>{number} {number === 1 ? 'guest' : 'guests'}</option>)}</select></Field>
      <Field label="Date" id="date" required><input id="date" name="date" type="date" min={new Date().toISOString().split('T')[0]} value={values.date} onChange={(event) => update('date', event.target.value)} required /></Field>
      <Field label="Time" id="time" required><select id="time" name="time" value={values.time} onChange={(event) => update('time', event.target.value)} required><option value="">Choose a time</option>{['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map((time) => <option key={time} value={time}>{time}</option>)}</select></Field>
      <Field label="Message" id="message" wide><textarea id="message" name="message" rows={4} value={values.message} onChange={(event) => update('message', event.target.value)} placeholder="Dietary notes, a birthday, a bottle you’d like to open…" /></Field>
    </div>
    {status === 'error' && <p className="form-error" role="alert">{error}</p>}
    <div className="form-foot"><p>We hold tables for 15 minutes. For parties of 7 or more, please call {site.phone}.</p><button className="copper-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Holding the table…' : 'Request a table'} <span>↗</span></button></div>
  </form>
}

function Field({ label, id, required = false, wide = false, children }: { label: string; id: string; required?: boolean; wide?: boolean; children: ReactNode }) {
  return <label className={`form-field ${wide ? 'form-field-wide' : ''}`} htmlFor={id}><span>{label}{required && <b aria-hidden="true">*</b>}</span>{children}</label>
}
