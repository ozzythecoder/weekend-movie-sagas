<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ozzythecoder/weekend-movie-sagas">
    <img src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Redux Sagas at the Movies</h3>

  <p align="center">
    A simple database app, allowing you to view and add to a list of movies.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* Node.js
* Express
* PostgreSQL

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/ozzythecoder/weekend-movie-sagas.git
   ```
2. Install NPM dependecies:
   ```sh
   npm install
   ```
3. Set up database as detailed in the `database.sql` file.
4. Run back-end server:
    ```sh
    npm run server
    ```
5. Open a new terminal (command + T) and run the development server:
    ```sh
    npm run client
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* The main page is a list of all movies. Click on a movie to open its details page.
* The details page will show the movies title, associated genres, poster, and its full description.
* Click "Add Movie" at the top to open a form window. Enter a film title, a valid image URL for a film poster, and a description. Select a genre from one of the dropdown menus.
  * Note: for the moment, only one genre can be added per new movie.
* Submit the movie, and you will be taken back to the main page, where your newly added movie will be visible.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/ozzythecoder/weekend-movie-sagas](https://github.com/ozzythecoder/weekend-movie-sagas)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

As always, a huge thank you to Prime Coding Academy for empowering me in these pursuits.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/august-mcallister
[product-screenshot]: public/images/documentation/mainpage-screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/