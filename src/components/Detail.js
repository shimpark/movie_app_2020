import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const {
            location, history 
        } = this.props; 
        
        //주소를 직접 입력했을 경우, 넘겨진 props 값이 업을 경우 홈으로 이동.
        if(location.state === undefined){
            history.push('/'); //home 으로 이동시킴.
        }
    }

    render() {

        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;