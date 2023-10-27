import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const containerStyle = {
    backgroundImage: "url('/downloads.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="container" style={containerStyle}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Progress Page" />
     
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
