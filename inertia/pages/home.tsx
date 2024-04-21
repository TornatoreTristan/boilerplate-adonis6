import { Head } from '@inertiajs/react'

export default function Home(props: { version: number; versionBoilerplate: string }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="flex flex-col gap-8 h-screen justify-center items-center">
        <div className="text-xl">
          <h1>AdonisJS {props.version} x Inertia x React</h1>
        </div>

        <span>BoilerPlate {props.versionBoilerplate}</span>
      </div>
    </>
  )
}
