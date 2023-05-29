import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="fflex">
        <h1>Cartoon Mania</h1>
            <p className="copy">Copyright &copy; 2023 Cartoon Mania, Inc.</p>
            <div className="policy">
                <p><a href="/">Terms of Use</a> | </p>
                <p><a href="/">Privacy Policy</a> | </p>
                <p><a href="/">Copyright Policy</a></p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;