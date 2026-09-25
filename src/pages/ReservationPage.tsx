import { PageIntro } from '../components/PageIntro'
import { ReservationForm } from '../components/ReservationForm'
import { site } from '../data/site'

export function ReservationPage() {
  return <>
    <PageIntro kicker="Reservations" title={<>Make room for<br /><em>the evening.</em></>} detail="For parties of seven or more, or for anything the form can’t quite say, call us directly." />
    <section className="reservation-section section-pad"><div className="reservation-aside"><span className="eyebrow">The practical part</span><h2>We’ll keep<br />a light on.</h2><p>Reservations open 60 days ahead. We ask for a card to hold your table; it is only charged in the event of a late cancellation.</p><div className="reservation-contact"><span className="eyebrow">Call the room</span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><span>{site.hours[1][0]} · from 14:00</span></div></div><ReservationForm /></section>
  </>
}
