import { Component } from "react";


export class ErrorBoundary extends Component {

    constructor (props){
        super(props);
        this.state ={
            hasError : false
        };
        this.home = this.home.bind(this);
    }

    static getDerivedStateFromError(error){
        console.log(error);
    return {
        hasError: true
    }
            
    }

    home(){
        this.setState({hasError:false});
      }

    componentDidCatch (error, info){
        console.log("Hello",error,info);
        // this.setState({errorMessage:error.toString() ,isError: true});
    }


    render (){
        if(this.state.hasError){
            return (
                <>
                <h1>
                    Something Went Wrong !!</h1>
                    <button onClick ={this.home} >
                        Get Me To Home </button></>

            )
        }
        return (
            <>{this.props.children}</>
           )
      }

    }