

const Header = (props) => {

    return (
    <h1><a href="/" onClick={function(event){
      event.preventDefault()
      props.onChangeMode();
    }}>{props.title}</a></h1>
    );
  }

  export default Header;