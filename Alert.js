class Alert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            animation: ''
        };

        // Fade out non-important alerts
        if( ! this.props.important ) {

            setTimeout(
                ()  => this.setState({
                    animation: this.props.dismissAnimation
                }), 
                this.props.duration
            );

            setTimeout(
                ()  => this.setState({
                    hidden: true
                }), 
                3500
            );

        }
    }

    dismiss() {
 
        this.setState({
            animation: this.props.dismissAnimation
        });

        setTimeout(
            ()  => this.setState({
                hidden: true
            }), 
            500
        );

        return this;
    }

    render() {
        var message = this.props.message;

        if(this.props.link) {
            message = '<a href="' + this.props.link + '">' + this.props.message + '</a>';
        }

        return (
            <div className={"alert alert-" + this.props.type + " " + this.state.animation} hidden={this.state.hidden}>
                <button type="button" className="close" onClick={this.dismiss.bind(this)}><span>×</span></button>
                <p dangerouslySetInnerHTML={{__html: message}}></p>
            </div>
        );
    }
}
            
Alert.defaultProps = { duration: 3000, important: false, dismissAnimation: 'fadeOut'};

export default Alert;