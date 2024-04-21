import { Head } from '@inertiajs/react'
import DefaultLayout from '#front/layouts/default.js'

export default function Home(props: { version: number; versionBoilerplate: string }) {
  return (
    <>
      <Head title="Homepage" />
      <DefaultLayout>
        <div className="flex flex-col gap-8 h-screen justify-center items-center">
          <div>
            <h1 className="font-bold text-xl">AdonisJS {props.version} x Inertia x React</h1>
          </div>

          <span>BoilerPlate {props.versionBoilerplate}</span>
        </div>
      </DefaultLayout>
    </>
  )
}
