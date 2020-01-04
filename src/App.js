import React from "react";
import "./App.css";

class App extends React.Component {
    componentDidMount() {
        const array = document.querySelectorAll(".word");
        var i = 0;
        setInterval(() => {
            array[i % 5].classList.add("active");
            i += 1;
        }, 1500);
    }

    end(e) {
        e.target.classList.remove("active");
    }

    render() {
        return (
            <div className="main">
                <div className="ctn">
                    <div className="word" onAnimationEnd={e => this.end(e)}>
                        hello
                    </div>
                    <div
                        className="word"
                        onAnimationEnd={e => this.end(e)}
                        style={{ lineHeight: "115%" }}
                    >
                        สวัสดี
                    </div>
                    <div className="word" onAnimationEnd={e => this.end(e)}>
                        hola
                    </div>
                    <div
                        className="word"
                        onAnimationEnd={e => this.end(e)}
                        style={{ lineHeight: "115%" }}
                    >
                        你好
                    </div>
                    <div
                        className="word"
                        onAnimationEnd={e => this.end(e)}
                        style={{ lineHeight: "115%" }}
                    >
                        안녕
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
