import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Walid Wahid",
        bio: "ℒ𝒊𝝂𝒆 𝓕𝒓𝒆𝒆 𝓞𝒓 𝓓𝒊𝒆 🦅",
        profession: "Software Developer",
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg",
      },
      shows: false,
      mount: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => {
        this.setState((prevState) => ({
          mount: prevState.mount + 1,
        }));
      },

      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleShow() {
    this.setState({
      shows: true,
    });
  }
  render() {
    const { fullName, bio, profession, imageSrc } = this.state.Person;
    if (this.state.shows) {
      return (
        <div className="max-w-[20%] mx-auto py-40">
          <a
            className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            href="https://www.linkedin.com/in/wa1ead/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={imageSrc}
                alt={fullName}
              />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {fullName}
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-400">
                <span>{profession}</span>
                <br />
                <span>{bio}</span>
              </p>
            </div>
          </a>
          <div>{this.state.mount}</div>
        </div>
      );
    } else {
      return (
        <div className="flex w-full h-[100vh]">
          <button
            className="bg-blue-100 text-blue-700 border-2 border-blue-950 hover:bg-blue-950 hover:border-blue-100  hover:text-blue-100 px-40 py-10 rounded-3xl font-semibold text-2xl mx-auto my-auto"
            onClick={() => this.handleShow()}
          >
            Show Me!
          </button>
        </div>
      );
    }
  }
}

export default App;
