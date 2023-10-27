import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{ backgroundImage: "url('public/download.jpg')" }}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Your HTML table with CSS code goes here */}
        <form>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="date" name="date1" /></td>
                <td><input type="text" name="details1" /></td>
              </tr>
              <tr>
                <td><input type="date" name="date2" /></td>
                <td><input type="text" name="details2" /></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <input type="submit" value="Submit" />
        </form>
        {/* End of the HTML table with CSS code */}
      </main>

      <Footer />
    </div>
  )
}
