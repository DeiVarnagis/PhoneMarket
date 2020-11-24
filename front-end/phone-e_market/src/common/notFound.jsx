import React from 'react';

function NotFound(props) {
    return (
        <div className="on-light">
            <div className="page-wrap page-wrap-max-width">
                <main className="article-content" id="maincontent">
                    <h1>
                        <div className="subhead">404 Error</div>
                        Sorry, we can’t seem to find what you’re looking for.
                    </h1>
                </main>
            </div>

            <img
                src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/images/ripped.jpg"
                alt=""
            />
        </div>
    );
}

export default NotFound;
