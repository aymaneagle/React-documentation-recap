// componet has to be in Capital letter so it can be isolated from html tags
// Example: <Profile /> → React component
// <img /> → HTML element

function Profile () {
    return (
        <img
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
        />
    )
}

export default function Gallery() {
    return (
        <section>
        <h1> Amazing Scientists </h1>

        <Profile/>
        <Profile/>

        </section>
    )
}