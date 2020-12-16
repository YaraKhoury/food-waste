import React, {  useEffect,useState } from 'react';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useDispatch, useStore } from 'react-redux';
import { ordersActions } from '../../redux/actions/orders';
import { marketsActions } from '../../redux/actions/markets';
const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const dispatch = useDispatch();
    const store = useStore();
    useEffect(() => {
      const retrieveProducts = async () => {
        await  dispatch(marketsActions.getProducts())
        setLoadedProducts(store.getState().productsReducer.MyProducts.payload.data.data.Product);
      }
      retrieveProducts();
    }, [sendRequest])
  
    const addToCartHandler = (product) => {
      dispatch(ordersActions.addtoCart( localStorage.getItem('user'), product._id,product.ProductName,product.ProductDiscountedPrice,product.ProductImage));
    };
  return (
    <React.Fragment>
    {isLoading && (
      <div className="center">
        <LoadingSpinner />
      </div>
    )}
    {!isLoading && loadedProducts &&
    <div>
      <h2 style={{textAlign:"center",fontSize:"45px",padding:"25px",letterSpacing:"6px",boxShadow:"0 4px 17px rgba(0, 0, 0, 0.10)"}}>Products Sales</h2>
      {!isLoading && loadedProducts && (
        <div>
          <div>
            <div className="row">
              {loadedProducts.map((x) => (
                  <div   key={x._id}>
                      <div className="card-banner" >
                        <div
                          className="row"
                          style={{
                            margin: "15px",
                            padding: "15px",
                            boxShadow: "0 4px 17px rgba(0, 0, 0, 0.10)",
                          }}
                        >
                          <div className="col-md-6">
                            <img
                              src={x.ProductImage}
                              style={{ height: "250px", width: "250px" }}
                            ></img>
                          </div>
                          <div className="col-md-6"  >
                            <div>
                              <h5
                                className="mytitle"
                                style={{ color: "black" }}
                              >
                                {x.ProductName}
                              </h5>
                            </div>
                            <div>
                              <h6
                                className="mytitle"
                                style={{ color: "gray", textDecoration:"line-through", fontSize:"17px" }}
                              >
                                {x.ProductPrice} L.L
                              </h6>
                              <h5
                                className="mytitle"
                                style={{ color: "black" }}
                              >
                                {x.ProductDiscountedPrice} L.L
                              </h5>
                            </div>
                            <h6
                              style={{ fontSize: "25px", padding: "15px" }}
                              className="expiryDate"
                            >
                              Till:  {x.ProductExpiryDate}
                            </h6>
                            <div style={{ textAlign: "center" }}>
                              <button
                                onClick={() => addToCartHandler(x)}
                                className="btn btn-primary "
                                style={{ marginTop: "15px" }}
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    }
  </React.Fragment>
  );
};

export default Products;


// we are retreiving all the markets presents 