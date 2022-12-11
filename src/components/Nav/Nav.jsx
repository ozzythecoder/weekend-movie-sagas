export default function Nav() {

  // array of locations
  const links = [
    { url: '/#/', text: 'Movie List'},
    { url: '/#/addMovie', text: 'Add a Movie'}
  ]

  return (
    <div className="nav-flex">
      
      {/* Loop over locations and render a link for each */}
      {links.map((link, index) => {
        return (
          <p key={index}>
            <a href={link.url}>{link.text}</a>
          </p>
        )
      })}
    </div>
  )
}