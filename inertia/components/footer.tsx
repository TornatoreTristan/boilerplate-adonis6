export default function Footer() {
  return (
    <div className="p-16 flex justify-between">
      <div className="w-1/4">
        <h3>Nom de l'application</h3>
        <p className="mt-4 text-sm text-slate-400">
          © 2024 - 🦊 Revontuli <br /> Design & code par Tristan TORNATORE
        </p>
      </div>
      <div className="w-1/4 flex justify-end gap-8">
        <div>
          <h3>Legal</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>Mentions légales</li>
            <li>Politiques de confidentialité</li>
          </ul>
        </div>
        <div>
          <h3>Utils</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>Contact</li>
            <li>Socials</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
