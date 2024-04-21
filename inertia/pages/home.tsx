import { Head } from '@inertiajs/react'

export default function Home(props: { version: number; versionBoilerplate: string }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span>BoilerPlate {props.versionBoilerplate}</span>
      </div>
    </>
  )
}
