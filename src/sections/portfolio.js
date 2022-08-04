import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// Layout
import Wrapper from "../components/layout/wrapper"
// UI
import Heading from "../components/ui/heading"
import PortfolioSection from "../components/ui/portfolio-section"
// Content
import WorkItem from "../templates/work-item"
import ProjectItem from "../templates/project-item"

const Portfolio = () => {
  const itemImage = useStaticQuery(
    graphql`
      query {
        pyTraceImage: file(name: { eq: "py-trace-image" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pyGradientRepresentation: file(
          name: { eq: "py-gradient-representation" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        myWebsite: file(name: { eq: "my-website" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        taskManager: file(name: { eq: "task-manager" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        weatherForecast: file(name: { eq: "weather-forecast" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        secureDev: file(name: { eq: "secure-dev" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cliWeather: file(name: { eq: "cli-weather" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cliNotes: file(name: { eq: "cli-notes" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        defaultItem: file(name: { eq: "default-item" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper id="portfolio-section">
      <Heading
        title="portfolio"
        subtitle="Let’s see what I’ve been up to lately."
      />

      <PortfolioSection section="Work Experience" />
      <WorkItem
        title='"Critical TechWorks, BMW Group": "Retail Integration Services"'
        timeline="Dec 2020 - Presents"
        listItemOne="Eliminated frequent downtimes experienced by our services by driving the Proof of Concept and implementation of a new Azure Application Gateway load balacing solution for newly created AKS clusters."
        listItemTwo="Improved our API debugging and performance assessment processes by creating and deploying mocks services which mimic third-party solutions’ input and output."
        listItemThree="Constant participation in the development of cross-departmental integration projects and cooperation with external partners for production incident-handling.
"
        techStack="DevOps - Java - MongoDB - Docker - Jenkins - Azure Kubernetes Service - Microsoft Azure Cloud - Git"
      />

      <PortfolioSection section="Personal Projects" />
      <ProjectItem
        title='(WiP) "Scripts": "Trace Image"'
        imgSrc={itemImage.pyTraceImage.childImageSharp.fluid}
        description="Scripts for loading and preprocessing images, finding edges and drawing lines based on Canny edge detection."
        techStack="Python - OpenCV - NumPy - Matplotlib - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/py-trace-image#readme"
      />
      <ProjectItem
        title='(WiP) "Scripts": "Gradient Representation"'
        imgSrc={itemImage.pyGradientRepresentation.childImageSharp.fluid}
        description="Scripts for loading and smoothing images, creating and exporting image gradient representations based on computed gradient magnitude and orientation."
        techStack="Python - OpenCV - NumPy - Matplotlib - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/py-gradient-representation#readme"
      />
      <ProjectItem
        title='"Website": "Andgcv Portfolio"'
        imgSrc={itemImage.myWebsite.childImageSharp.fluid}
        description="This exact website! My personal website where you can connect with me, get to know me a little better and see what I’ve been up to lately! I wanted something easy to use, easy to maintain and with good SEO, and considering the fact that I had previous experience with React, Gatsby seemed like a great fit!"
        techStack="React - Gatsby - GraphQL - Styled-components - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/andgcv-portfolio#readme"
      />
      <ProjectItem
        title='(WiP) "Web Application": "Task Management"'
        imgSrc={itemImage.taskManager.childImageSharp.fluid}
        description="A web application for authenticated Users to create and manage the Tasks associated with their accounts."
        techStack="Node.js - Express - MongoDB - Mongoose - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/task-manager#readme"
      />
      <ProjectItem
        title='"Web Application": "Weather Forecast"'
        imgSrc={itemImage.weatherForecast.childImageSharp.fluid}
        description="A web application for requesting forecast data on a given location. In order to make this happen, I implemented Geolocation and Forecast APIs, from Mapbox and DarkSky respectively, as well as Node.js asynchronous callback patterns to retrieve the data and return it to the user, via Handlebars."
        techStack="Node.js - Express - Vanilla JavaScript - CSS - Git"
        visitDestination="http://andgcv-weather-app.herokuapp.com/"
        sourceDestination="https://github.com/andgcv/weather-app#readme"
      />
      <ProjectItem
        title='"Website": "Secure Dev - Cybersecurity"'
        imgSrc={itemImage.secureDev.childImageSharp.fluid}
        description="A responsive, informative website, regarding various domains in Cybersecurity. The final project of my Bachelor’s Degree! I had no experience with React at the time, and had been working mostly with Vanilla JavaScript for the frontend, so this was quite a journey."
        techStack="React - Bootstrap - Styled-components - Git"
        visitDestination="http://andgcv-secure-dev.herokuapp.com/"
        sourceDestination="https://github.com/andgcv/secure-dev#readme"
      />
      <ProjectItem
        title='"Command-line Application": "Weather Forecast"'
        imgSrc={itemImage.cliWeather.childImageSharp.fluid}
        description="A command-line application for requesting forecast data on a given location. This is where I implemented the Geolocation and Forecast APIs, from Mapbox and DarkSky respectively, for the first time. This is also where I started to learn more about asynchronous callback patterns, callback chaining and environment variables."
        techStack="Node.js - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/cli-weather#readme"
      />
      <ProjectItem
        title='"Command-line Application": "Notes"'
        imgSrc={itemImage.cliNotes.childImageSharp.fluid}
        description="A command-line application for creating, deleting and displaying JSON-like notes. This was the first time I built a project using Node.js, and I loved it! In order to make this project come to life, I employed core Node.js APIs, File System operations and JSON data exchange methods."
        techStack="Node.js - Git"
        noVisit
        sourceDestination="https://github.com/andgcv/cli-notes#readme"
      />
    </Wrapper>
  )
}

export default Portfolio
