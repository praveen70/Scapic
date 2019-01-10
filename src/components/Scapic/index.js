import React from "react";
import {
  fetchFood
} from '../../actions/Scapic.action';
import {
  connect
} from 'react-redux';
import {
  Card,
  Row,
  Col,
  Pagination,
  Table,
  Carousel
} from 'antd';
import './Scapic.css'



const {
  Meta
} = Card;




class Food extends React.Component {
    state = {

      current: 1,
      
    }

    onChange = (page) => {
      var animalPage = [];

      console.log(page);
      this.setState({
        current: page,
      });
      let storage = localStorage.getItem("Data");
     
      let categories = [];
      if ( storage && storage.categories ) {
        categories = storage.categories;
      }
      console.log("categories", categories);
     

    }

    componentDidMount() {

      this.props.fetchFood()

    }




    render() {
        let data = this.props.state.food.Food;
        let storage = localStorage.setItem("Data", JSON.stringify(data))
       
        let categories = [];
        if ( data && data.categories ) {
          categories = data.categories;
        }
      
      

        return (
          <div>
            <h1 style={{ color: 'red', fontSize: '40px', paddingLeft:750 }}>3D Models</h1>

            {  categories && categories.length > 0 && categories.map( ( category, index )=> {
              
              return (
                <div style={{ marginBottom: '30px' }}>
                  <div><h1 style={{paddingLeft:50}}>{ category.name }</h1></div>

                  <div style={{ display: 'flex', width: '100%', background: '#ECECEC'  }}>
                  { category.models.map( (item , index)=> {
                    console.log(index)
                    return (
                      <Card bordered={false} style={{ flex: '1',  marginRight: '10px' }}>
                        <p style={{paddingLeft:50}}>{ item.name }</p>
                        <img style={{ maxWidth: '140px' }} src={item.thumb} />
                      </Card>
                    )
                  } ) }
                  </div>

                  <Pagination defaultCurrent={1} total={50} style={{paddingTop:20}} onChange={this.onChange} />
                </div>
              )
            }) }







          </div>
        )

    }


}

      const mapStateToProps = (state) => {

        return {

          state: state,

        }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          fetchFood: () => {
            dispatch(fetchFood())
          }

        }
      }

      export default connect(mapStateToProps, mapDispatchToProps)(Food);