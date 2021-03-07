import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Request Us</h1>
              <p>
                This is an example site integrating Digital jet form handling with
                Gatsby
              </p>
              <ul>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>

              <h2>Troubleshooting</h2>
              <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
              </p>
              <h3>Adding reCAPTCHA</h3>
              <p>
                its always be an great to work with you. Regards Admin!
                for a working example.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
