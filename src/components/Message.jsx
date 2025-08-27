function Message(props){
 const {icon , text} = props;
 console.log(props);
    return(
        <p>{icon} {text}</p>
    )
}

export default Message;