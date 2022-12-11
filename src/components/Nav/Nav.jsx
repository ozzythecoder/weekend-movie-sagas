


export default function Nav() {

  const links = [
    { url: '/#/', text: 'Movie List'},
    { url: '/#/addMovie', text: 'Add a Movie'}]

  return (
    <div className="nav-flex">
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