import Header from "../components/Header/Header"

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, React, Redux(RTK, Query), Axios, REST
                API, TDD, Vite, StoryBook, Git, GitHub, React Router DOM, React
                Hook Form, Formik, HTML, CSS/S(C|A)SS, Styled Components, Radix
                UI, Material UI, TailwindCSS, BootStrap
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB, PHP</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
